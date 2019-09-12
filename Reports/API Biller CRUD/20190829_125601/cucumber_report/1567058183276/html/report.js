$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/reinard/Documents/Katalon Project/Trunko/Include/features/API Biller CRUD/Update Biller Config Failed.feature");
formatter.feature({
  "name": "Update Biller Config Failed",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Update Biller Config Failed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "url : \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Method : \u003cMethod\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User Input id : \u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Request body : \u003cbody\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Send request",
  "keyword": "And "
});
formatter.step({
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "http_response_code",
        "body",
        "url",
        "Method"
      ]
    },
    {
      "cells": [
        "1000",
        "400",
        "{\"key\":\"value\"}",
        "https://trunko.sumpahpalapa.com/biller/id/config",
        "POST"
      ]
    },
    {
      "cells": [
        "63",
        "500",
        "testError",
        "https://trunko.sumpahpalapa.com/biller/id/config",
        "POST"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Update Biller Config Failed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "url : https://trunko.sumpahpalapa.com/biller/id/config",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Method : POST",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.method(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input id : 1000",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Request body : {\"key\":\"value\"}",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.requestBody(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send request",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.sendRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Get Http response code : 400",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027401\u0027\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:212)\n\tat com.ea.steps.Steps.getHttpResponseCode(Steps.groovy:241)\n\tat ✽.User Get Http response code : 400(/Users/reinard/Documents/Katalon Project/Trunko/Include/features/API Biller CRUD/Update Biller Config Failed.feature:29)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Update Biller Config Failed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "url : https://trunko.sumpahpalapa.com/biller/id/config",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Method : POST",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.method(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input id : 63",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Request body : testError",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.requestBody(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send request",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.sendRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Get Http response code : 500",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027500\u0027 but actual status code is \u0027401\u0027\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:212)\n\tat com.ea.steps.Steps.getHttpResponseCode(Steps.groovy:241)\n\tat ✽.User Get Http response code : 500(/Users/reinard/Documents/Katalon Project/Trunko/Include/features/API Biller CRUD/Update Biller Config Failed.feature:29)\n",
  "status": "failed"
});
});