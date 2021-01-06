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
import keywordpackage.keywords
import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.bouncycastle.pqc.crypto.sphincs.Tree.leafaddr
import org.json.JSONObject
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
import groovy.json.JsonSlurper


class Steps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	ResponseObject response
	JsonSlurper slurper = new JsonSlurper()
	Map parsedResponse

	/* Given Section */
	@Given("Biller response with XML Content-Type")
	def billerResponseWithXMLContentType(){
	}

	@Given("API : (.*)")
	def api(String api){
		GlobalVariable.API = api
	}

	@Given("Biller response with wrong format XML Content-Type")
	def billerResponseWithWrongFormatXMLContentType(){
	}

	@Given("Biller Config Set and Rules set as (.*)")
	def BillerConfigSetAndRulesSet(String rules){
	}

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

	@And("Content-Type : (.*)")
	def contentType(String contentType){
		GlobalVariable.CONTENT_TYPE = contentType
	}

	/* End Given Section */

	/* When Section */
	@When("User hit trunko callback with invalid biller")
	def userHitTrunkoCallbackWithInvalidBiller(){
		GlobalVariable.BILLER_LABEL = 'no Biller'
		if(GlobalVariable.METHOD =='POST'){
			GlobalVariable.PAYLOAD= '{\"data\":\"asd\"}'
		}
		else{
			GlobalVariable.PAYLOAD= 'data[xxx]=1'
		}
	}

	@When("User hit trunko callback from ip that is not registered")
	def userHitTrunkoCallbackFromIpNotRegistered(){
		GlobalVariable.BILLER_LABEL = 'siganteng'
		if(GlobalVariable.METHOD =='POST'){
			GlobalVariable.PAYLOAD= '{\"data\":\"asd\"}'
		}
		else{
			GlobalVariable.PAYLOAD= 'data[xxx]=1'
		}
	}

	@When("User hit trunko callback with valid biller")
	def userHitTrunkoCallbackWithValidBiller(){
		GlobalVariable.BILLER_LABEL = 'Biller FBS UAT'
		if(GlobalVariable.CONTENT_TYPE.toString().contains('json') || GlobalVariable.CONTENT_TYPE.toString().contains('xml') || GlobalVariable.CONTENT_TYPE.toString().contains('anything')){
			GlobalVariable.BILLER_LABEL = 'trunko_callback_2'
		}
		else{
			GlobalVariable.BILLER_LABEL = 'trunko_callback'
		}
	}

	@And("User input invalid payload")
	def userInputInvalidPayload(){
		if(GlobalVariable.METHOD =='POST'){
			GlobalVariable.PAYLOAD= '{asdasd:asd}'
		}
		else{
			GlobalVariable.PAYLOAD= 'asdasd'
		}
	}

	@And("User input valid payload and send callback")
	def userInputValidPayload(){
		if(GlobalVariable.METHOD =='POST'){
			if(GlobalVariable.CONTENT_TYPE.toString().contains('json')){
				response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko Callback Payload POST'))
			}
			else if(GlobalVariable.CONTENT_TYPE.toString().contains('xml')){
				response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko Callback Payload POST - xml'))
			}
			else if(GlobalVariable.CONTENT_TYPE.toString().contains('urlencoded')){
				response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko Callback Payload POST - urlencoded'))
			}
			else if(GlobalVariable.CONTENT_TYPE.toString().contains('form-data')){
				response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko Callback Payload POST - form-data'))
			}
		}
		else{
			response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko Callback Payload GET'))
		}
	}

	@And("User input without payload")
	def userInputWithoutPayload(){
	}

	@And("User send callback")
	def userSendCallback(){
		if(GlobalVariable.METHOD =='POST'){
			response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko Callback POST'))
		}
		else{
			response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko Callback GET'))
		}
	}

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

	@And("Input parameters : (.*)")
	def inputParameters(String parameters){
		GlobalVariable.PARAMETERS = parameters
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
		print rawdata
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

		parsedResponse = slurper.parseText(response.getResponseBodyContent())
	}

	@And("Send request for this scenario only")
	def sendRequestForThisScenarioOnly(){
		if(GlobalVariable.COMMAND_TYPE == "advise")
			response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko UAT - Copy'))
		else if(GlobalVariable.COMMAND_TYPE == "purchase")
			response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko UAT - Copy (1)'))
		else if(GlobalVariable.COMMAND_TYPE == "reversal")
			response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko UAT - Copy (2)'))
	}

	@When("User send request with wrong auth")
	def userSendRequestWithWrongAuth(){
		response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko - BPA698'))
	}

	@And("Send request for BPA279")
	def sendRequestfotBPA279(){
		response = WS.sendRequest(findTestObject('Kraken - BM Adapter/Trunko - BPA279'))
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

	@And("detail : (.*)")
	def detail(String detail){

		if(detail=="genfm"){
			WS.verifyElementPropertyValue(response, 'data.detail', detail)
		}
		else if(detail!="null"){
			String expectedDetail = detail.replace('\n', '')
			expectedDetail = expectedDetail.replace(' ', '')
			//WS.verifyElementPropertyValue(response, 'data.detail', detail)



			def jsonSlurper = new JsonSlurper()
			def object = jsonSlurper.parseText(response.getResponseBodyContent())
			String actualDetail = object.get('data').get('detail')
			actualDetail = actualDetail.replace(' ', '')
			WS.verifyMatch(actualDetail, expectedDetail, false)
		}
		else{
			WS.verifyElementPropertyValue(response, 'data.detail', null)
		}
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

	@And("User Get FBS response status : (.*)")
	def userGetFBSResponseStatus(String status){
	}

	@And("User Get FBS response data.serial_number : (.*)")
	def userGetFbsResponseSerialNumber(String serial_number){
	}

	@And("User get next command : (.*)")
	def userGetNextCommand(String next){

		if(next=='null'){
			WS.verifyElementPropertyValue(response, 'next', '')
		}
		else{
			WS.verifyElementPropertyValue(response, 'next', next)
		}
	}

	@And("User get rawdata in json format")
	def userGetRawdataInJsonFormat(){
		def jsonSlurper = new JsonSlurper()
		def object = jsonSlurper.parseText(response.getResponseBodyContent())

		assert object instanceof Map

		def json = jsonSlurper.parseText(object.get('data').get('rawdata'))

		assert json instanceof Map
	}

	@And("User get response : (.*)")
	def userGetResponse(String responseMessage){
		WS.containsString(response, responseMessage, false)
	}

	@And ("User verify response map accordingly")
	def userVerifyResponseMapAccordingly(){
	}

	@And("User get message in 16 digit random number")
	def userGetMessageInRandomNumber(){
		def jsonSlurper = new JsonSlurper()
		def object = jsonSlurper.parseText(response.getResponseBodyContent())
		String message = object.get('data').get('message')

		Integer len = message.length()

		WS.verifyEqual(len, 16)
	}

	@And("User Get stock info")
	def userGetStockInfo(){
		def jsonSlurper = new JsonSlurper()
		def object = jsonSlurper.parseText(response.getResponseBodyContent())
		String info = object.get('stock').get('info')
		String saldo1 = object.get('stock').get('saldo1')
		String saldo2 = object.get('stock').get('saldo2')

		WS.verifyMatch(info,"stock sudah menipis",false)
		WS.verifyMatch(saldo1,"1000.00",false)
		WS.verifyMatch(saldo2,"2000.00",false)
	}
	/* End Then Section */
}