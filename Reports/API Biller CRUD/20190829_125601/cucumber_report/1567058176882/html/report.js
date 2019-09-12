$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/reinard/Documents/Katalon Project/Trunko/Include/features/API Biller CRUD/Get Biller Config Success.feature");
formatter.feature({
  "name": "Get Biller Config Success",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Get Biller Config Success",
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
  "name": "Send request",
  "keyword": "And "
});
formatter.step({
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Config of Biller : \u003cid\u003e Shown",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "Method",
        "url",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "63",
        "GET",
        "https://trunko.sumpahpalapa.com/biller/id/config",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get Biller Config Success",
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
  "name": "Method : GET",
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
  "name": "User Get Http response code : 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027200\u0027 but actual status code is \u0027401\u0027\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:212)\n\tat com.ea.steps.Steps.getHttpResponseCode(Steps.groovy:241)\n\tat ✽.User Get Http response code : 200(/Users/reinard/Documents/Katalon Project/Trunko/Include/features/API Biller CRUD/Get Biller Config Success.feature:28)\n",
  "status": "failed"
});
formatter.step({
  "name": "Config of Biller : 63 Shown",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.configOfBillerShown(String)"
});
formatter.result({
  "status": "skipped"
});
});