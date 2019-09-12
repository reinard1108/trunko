package com.ea.steps
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import javax.xml.bind.annotation.XmlElementDecl.GLOBAL

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


class Steps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	ResponseObject response

	/* Given Section */
	@Given("Command Type : (.*)")
	def commandType(String command_type){
	}

	@And ("Product Mapping : (.*)")
	def productMapping(String product_id){
	}

	@Given("Biller Config : (.*)")
	def billerLabel(String biller_label){
	}

	@Given("Biller Config Set")
	def BillerConfigSet(){
	}

	@Given("Mapping Config Set")
	def mappingConfig(){
	}

	@Given("url : (.*)")
	def url(String url){
		GlobalVariable.URL = url
	}

	@Given("Product Type Not Set")
	def productTypeNotSet(){
	}

	@And("Method : (.*)")
	def method(String Method){
		GlobalVariable.METHOD = Method
	}


	/* End Given Section */

	/* When Section */
	@When("User Input command_type : (.*)")
	def inputCommandType(String command_type){
		GlobalVariable.COMMAND_TYPE = command_type
	}

	@When("User Input biller_label : (.*)")
	def userInputBillerLabel(String biller_label){
		GlobalVariable.BILLER_LABEL = biller_label
	}

	@When("User send request")
	def userSendRequest(){
		response = WS.sendRequest(findTestObject('API Biller CRUD/Get Biller List'))
	}

	@When("User Input id : (.*)")
	def userInputId(String id){
		GlobalVariable.ID = id
	}

	@When("User Input product_id : (.*)")
	def userInputProductId(String product_id){
		GlobalVariable.PRODUCT_ID = product_id
	}

	@And("Input product_id : (.*)")
	def inputProductId(String product_id){
		GlobalVariable.PRODUCT_ID = product_id
	}

	@And("Input transaction_id : (.*)")
	def inputTransactionId(String transaction_id){
		GlobalVariable.TRANSACTION_ID = transaction_id
	}

	@And("Input transaction_biller_id : (.*)")
	def inputTransactionBillerId(String transaction_biller_id){
		GlobalVariable.TRANSACTION_BILLER_ID = transaction_biller_id
	}

	@And("Input customer_id : (.*)")
	def inputCustomerId(String customer_id){
		GlobalVariable.CUSTOMER_ID = customer_id
	}

	@And("Input partner_id : (.*)")
	def inputPartnerId(String partner_id){
		GlobalVariable.PARTNER_ID = partner_id
	}

	@And("Input biller_id : (.*)")
	def inputBillerId(String biller_id){
		GlobalVariable.BILLER_ID = biller_id
	}

	@And("Input biller_label : (.*)")
	def inputBillerLabel(String biller_label){
		GlobalVariable.BILLER_LABEL = biller_label
	}

	@And("Input remote_transaction_id :(.*)")
	def inputRemoteTransactionId(String remote_transaction_id){
		GlobalVariable.REMOTE_TRANSACTION_ID = remote_transaction_id
	}

	@And("Input rawdata : (.*)")
	def inputRawdata(String rawdata){
		GlobalVariable.RAWDATA = rawdata
	}

	@And("Input remote_product_id : (.*)")
	def inputRemoteProductId(String remote_product_id){
		GlobalVariable.REMOTE_PRODUCT_ID = remote_product_id
	}

	@And("Request body : (.*)")
	def requestBody(String body){
		GlobalVariable.BODY = body
	}

	@And("Send request")
	def sendRequest(){
		if(GlobalVariable.URL==""){
			print GlobalVariable.BILLER_LABEL
			print GlobalVariable.PRODUCT_ID
			response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko UAT'))
		}
		else if(GlobalVariable.URL=="https://trunko.sumpahpalapa.com/biller/")
			response = WS.sendRequest(findTestObject('API Biller CRUD/Get Biller List'))
		else if(GlobalVariable.URL=="https://trunko.sumpahpalapa.com/biller/id/config" && GlobalVariable.METHOD == "GET")
			response = WS.sendRequest(findTestObject('API Biller CRUD/Get Biller Config'))
		else if(GlobalVariable.URL=="https://trunko.sumpahpalapa.com/biller/id/config" && GlobalVariable.METHOD == "POST")
			response = WS.sendRequest(findTestObject('API Biller CRUD/Update Biller Config'))
	}
	/* End When Section */

	/* Then Section */
	@Then("Get response_code : (.*)")
	def getResponseCode(String response_code){
		WS.verifyElementPropertyValue(response, 'response_code', response_code)
	}

	@Then("Get remote_product_id : (.*)")
	def getRemoteProductId(String remote_product_id){
		WS.verifyElementPropertyValue(response, 'remote_product_id', remote_product_id)
	}

	@Then("Get transaction_id : (.*)")
	def getTransactionId(String transaction_id){
		WS.verifyElementPropertyValue(response, 'transaction_id', transaction_id)
	}

	@And("price : (.*)")
	def price(String price){
		WS.verifyElementPropertyValue(response, 'price', price)
	}

	@And("transaction_biller_id : (.*)")
	def transactionBillerId(String transaction_biller_id){
		WS.verifyElementPropertyValue(response, 'transaction_biller_id', transaction_biller_id)
	}

	@And("remote_transaction_id : (.*)")
	def remoteTransactionId(String remote_transaction_id){
		WS.verifyElementPropertyValue(response, 'remote_transaction_id', remote_transaction_id)
	}

	@And("remote_product_id : (.*)")
	def remoteProductId(String remote_product_id){
		WS.verifyElementPropertyValue(response, 'remote_product_id', remote_product_id)
	}

	@And("customer_id : (.*)")
	def customerId(String customer_id){
		WS.verifyElementPropertyValue(response, 'customer_id', customer_id)
	}

	@And("response_code : (.*)")
	def responseCode(String response_code){
		WS.verifyElementPropertyValue(response, 'response_code', response_code)
	}

	@And("amount : (.*)")
	def amount(String amount){
		WS.verifyElementPropertyValue(response, 'amount', amount)
	}

	@And("serial_number : (.*)")
	def serialNumber(String serial_number){
		WS.verifyElementPropertyValue(response, 'data.serial_number', serial_number)
	}

	@And("biller_rescode : (.*)")
	def billerRescode(String biller_rescode){
		WS.verifyElementPropertyValue(response, 'data.biller_rescode', biller_rescode)
	}

	@And("message : (.*)")
	def message(String message){
		WS.verifyElementPropertyValue(response, 'data.message', message)
	}

	@And("rawdata : (.*)")
	def rawdata(String rawdata){
		rawdata = rawdata + '\n'
		WS.verifyElementPropertyValue(response, 'data.rawdata', rawdata)
	}

	@Then("User Get Http response code : (.*)")
	def getHttpResponseCode(String http_response_code){
		WS.verifyResponseStatusCode(response, http_response_code as Integer)
	}
	@And("List of Biller")
	def listOfBiller(){
	}

	@And("Config of Biller : (.*) Shown")
	def configOfBillerShown(String id){
	}

	@And("Biller Config Updated")
	def billerConfigUpdated(){
		response = WS.sendRequest(findTestObject('API Biller CRUD/Get Biller Config'))
		WS.verifyMatch(response.getResponseBodyContent(), GlobalVariable.BODY + "\n", false)
	}
	/* End Then Section */
}