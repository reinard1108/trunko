package keywordpackage

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import java.security.AlgorithmParameters;
import java.security.GeneralSecurityException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import javax.crypto.Cipher;import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import com.kms.katalon.core.annotation.Keyword
import groovy.json.JsonSlurper

public class Encryption {
	def createSecretKey(char[] password, byte[] salt, int iterationCount, int keyLength) throws
	NoSuchAlgorithmException, InvalidKeySpecException {
		SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA512");
		PBEKeySpec keySpec = new PBEKeySpec(password, salt, iterationCount, keyLength);
		SecretKey keyTmp = keyFactory.generateSecret(keySpec);
		return new SecretKeySpec(keyTmp.getEncoded(), "AES");
	}
	def base64Encode(byte[] bytes) {
		return Base64.getEncoder().encodeToString(bytes);
	}
	def base64Decode(String property) throws IOException {
		return Base64.getDecoder().decode(property);
	}

	@Keyword
	def encrypt(String property) throws GeneralSecurityException, UnsupportedEncodingException {
		SecretKeySpec key = createSecretKey(((new JsonSlurper().parseText((new File(GlobalVariable.masterPasswordFile)).text))["masterPassword"]).toCharArray(), new String("12345678").getBytes(), 40000, 128)
		Cipher pbeCipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		pbeCipher.init(Cipher.ENCRYPT_MODE, key);
		AlgorithmParameters parameters = pbeCipher.getParameters();
		IvParameterSpec ivParameterSpec = parameters.getParameterSpec(IvParameterSpec.class);
		byte[] cryptoText = pbeCipher.doFinal(property.getBytes("UTF-8"));
		byte[] iv = ivParameterSpec.getIV();
		return base64Encode(iv) + ":" + base64Encode(cryptoText);
	}

	@Keyword
	def static decrypt(String string) throws GeneralSecurityException, IOException {
		SecretKeySpec key = createSecretKey(((new JsonSlurper().parseText((new File(GlobalVariable.masterPasswordFile)).text))["masterPassword"]).toCharArray(), new String("12345678").getBytes(), 40000, 128)
		String iv = string.split(":")[0];
		String property = string.split(":")[1];
		Cipher pbeCipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		pbeCipher.init(Cipher.DECRYPT_MODE, key, new IvParameterSpec(base64Decode(iv)));
		return new String(pbeCipher.doFinal(base64Decode(property)), "UTF-8");
	}
}
