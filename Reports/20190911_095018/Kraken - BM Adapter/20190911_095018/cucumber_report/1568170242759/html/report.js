$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/reinard/Documents/Katalon Project/Trunko/Include/features/Kraken - BM Adapter/Product Mapping Success.feature");
formatter.feature({
  "name": "Product Mapping Success",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Product Mapping Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Command Type : \u003ccommand_type\u003e Config Set",
  "keyword": "Given "
});
formatter.step({
  "name": "Product Mapping : \u003cproduct_id\u003e Config Set",
  "keyword": "And "
});
formatter.step({
  "name": "User Input command_type : \u003ccommand_type\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Send request",
  "keyword": "And "
});
formatter.step({
  "name": "Get remote_product_id : \u003cremote_product_id\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "price : \u003cprice\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "command_type",
        "product_id",
        "remote_product_id",
        "price"
      ]
    },
    {
      "cells": [
        "purchase",
        "1",
        "PKREG60WS",
        "4900"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Product Mapping Success",
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
  "name": "Command Type : purchase Config Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.commandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product Mapping : 1 Config Set",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.productMapping(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : purchase",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input product_id : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputProductId(String)"
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
  "name": "Get remote_product_id : PKREG60WS",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getRemoteProductId(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected element property value \u0027PKREG60WS\u0027 is not equal with actual property value \u0027\u0027\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword$_verifyElementPropertyValue_closure1.doCall(VerifyElementPropertyValueKeyword.groovy:56)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword$_verifyElementPropertyValue_closure1.call(VerifyElementPropertyValueKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword.verifyElementPropertyValue(VerifyElementPropertyValueKeyword.groovy:48)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword.execute(VerifyElementPropertyValueKeyword.groovy:43)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyElementPropertyValue(WSBuiltInKeywords.groovy:123)\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyElementPropertyValue$0.call(Unknown Source)\n\tat com.ea.steps.Steps.getRemoteProductId(Steps.groovy:175)\n\tat ✽.Get remote_product_id : PKREG60WS(/Users/reinard/Documents/Katalon Project/Trunko/Include/features/Kraken - BM Adapter/Product Mapping Success.feature:29)\n",
  "status": "failed"
});
formatter.step({
  "name": "price : 4900",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.price(String)"
});
formatter.result({
  "status": "skipped"
});
});