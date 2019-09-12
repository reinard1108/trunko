$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/reinard/Documents/Katalon Project/Trunko/Include/features/Kraken - BM Adapter/Biller Label Success.feature");
formatter.feature({
  "name": "Biller Label Success",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Biller Label Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Biller Label : \u003cbiller_label\u003e Set",
  "keyword": "Given "
});
formatter.step({
  "name": "User Input biller_label : \u003cbiller_label\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Send request",
  "keyword": "And "
});
formatter.step({
  "name": "Get response_code : \u003cresponse_code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "biller_label",
        "response_code"
      ]
    },
    {
      "cells": [
        "trunko_test",
        "00"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Biller Label Success",
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
  "name": "Biller Label : trunko_test Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.billerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input biller_label : trunko_test",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
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
  "name": "Get response_code : 00",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getResponseCode(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected element property value \u002700\u0027 is not equal with actual property value \u002799\u0027\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword$_verifyElementPropertyValue_closure1.doCall(VerifyElementPropertyValueKeyword.groovy:56)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword$_verifyElementPropertyValue_closure1.call(VerifyElementPropertyValueKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword.verifyElementPropertyValue(VerifyElementPropertyValueKeyword.groovy:48)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword.execute(VerifyElementPropertyValueKeyword.groovy:43)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyElementPropertyValue(WSBuiltInKeywords.groovy:123)\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyElementPropertyValue$0.call(Unknown Source)\n\tat com.ea.steps.Steps.getResponseCode(Steps.groovy:136)\n\tat ✽.Get response_code : 00(/Users/reinard/Documents/Katalon Project/Trunko/Include/features/Kraken - BM Adapter/Biller Label Success.feature:27)\n",
  "status": "failed"
});
});