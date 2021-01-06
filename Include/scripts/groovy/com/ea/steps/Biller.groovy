package com.ea.steps
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

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
import groovy.json.JsonSlurper


class Biller {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	ResponseObject response
	def jsonSlurper = new JsonSlurper()
	def object

	@Given("user get token")
	def userGetToken(){
		response = WS.sendRequest(findTestObject("Object Repository/Login Kraken"))
		object = jsonSlurper.parseText(response.getResponseBodyContent())
		GlobalVariable.TOKEN = object.token
	}
	
	@Given("feature : (.*)")
	def feature(String feature){
		GlobalVariable.FEATURE = feature
	}

	@Given("base url : (.*)")
	def baseUrl(String url){
		GlobalVariable.BASE_URL = url
	}

	@Given("path : (.*)")
	def path(String path){
		GlobalVariable.PATH = path
	}

	@Given("api name : (.*)")
	def apiName(String api_name){
		GlobalVariable.API_NAME = api_name
		print GlobalVariable.FEATURE
	}

	@When("user input content type : (.*)")
	def userInputContentType(String content_type){
		GlobalVariable.CONTENT_TYPE = content_type
	}

	@And("user input mapping : (.*)")
	def userInputMapping(String mapping){
		GlobalVariable.MAPPING = mapping
	}

	@And("user input rules : (.*)")
	def userInputRules(String rules){
		GlobalVariable.RULES = rules
	}

	@And("user input response_code_mapping : (.*)")
	def userInputResponseCodeMapping(String response_code_mapping){
		GlobalVariable.RESPONSE_CODE_MAPPING = response_code_mapping
	}

	@And("user input content : (.*)")
	def userInputContent(String content){
		GlobalVariable.CONTENT = content
	}

	@And("user send request")
	def userSendRequest(){
		GlobalVariable.URL = GlobalVariable.BASE_URL + GlobalVariable.PATH
		response = WS.sendRequest(findTestObject("Object Repository/" + GlobalVariable.FEATURE + "/" + GlobalVariable.API_NAME))

		object = jsonSlurper.parseText(response.getResponseBodyContent())
	}

	@Then("user get http response code : (.*)")
	def userGetHttpResponseCode(String http_response_code){
		WS.verifyResponseStatusCode(response, http_response_code as Integer)
	}

	@And("user verify simulate success details")
	def userVerifySimulateSuccessDetails(){
	}

	@And("user get validation error content : (.*)")
	def userGetValidationErrorContent(String message){
		assert object.validationError.content[0] == message
	}

	@And("user get error message : (.*)")
	def userGetErrorMessage(String message){
		WS.containsString(response, message, false)
	}
	
}