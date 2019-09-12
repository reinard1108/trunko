$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/reinard/Documents/Katalon Project/Trunko/Include/features/Kraken - BM Adapter/Request - Response Mapping Success.feature");
formatter.feature({
  "name": "Request - Response Mapping Success",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Request - Response Mapping Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Mapping Config Set",
  "keyword": "Given "
});
formatter.step({
  "name": "User Input command_type : \u003ccommand_type\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Input transaction_id : \u003ctransaction_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input transaction_biller_id : \u003ctransaction_biller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input customer_id : \u003ccustomer_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input partner_id : \u003cpartner_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input biller_id : \u003cbiller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input biller_label : \u003cbiller_label\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input rawdata : \u003crawdata\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Send request",
  "keyword": "And "
});
formatter.step({
  "name": "Get transaction_id : \u003ctransaction_id\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "transaction_biller_id : \u003ctransaction_biller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "remote_transaction_id : \u003cremote_transaction_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "remote_product_id : \u003cremote_product_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "customer_id : \u003ccustomer_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "response_code : \u003cresponse_code\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "price : \u003cprice\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "amount : \u003camount\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "serial_number : \u003cserial_number\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "biller_rescode : \u003cbiller_rescode\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "message : \u003cmessage\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "rawdata : \u003crawdata\u003e",
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
        "transaction_id",
        "transaction_biller_id",
        "remote_transaction_id",
        "remote_product_id",
        "customer_id",
        "response_code",
        "price",
        "amount",
        "serial_number",
        "biller_rescode",
        "partner_id",
        "product_id",
        "biller_id",
        "biller_label",
        "rawdata",
        "message"
      ]
    },
    {
      "cells": [
        "purchase",
        "6855945",
        "1",
        "110931978314",
        "PKREG60WS",
        "085363783000",
        "00",
        "4900",
        "7000",
        "0051003619319900",
        "0000",
        "6",
        "1",
        "1",
        "trunko_test",
        "{\"customer_number\":\"085363783000\",\"data\":{\"biller_message\":\"Pengisian Voucher sebesar 25000 ke nomor 085363783000 pada tanggal 18/07/2019 09:54:44 telah berhasil dengan no ref \\u003c0051003619319900\\u003e\",\"rc_biller\":\"0000\",\"remote_transaction_id\":\"110931978314\",\"serial_number\":\"0051003619319900\"},\"status\":\"sukses\",\"transaction_id\":6855945}",
        "Pengisian Voucher sebesar 25000 ke nomor 085363783000 pada tanggal 18/07/2019 09:54:44 telah berhasil dengan no ref \u003c0051003619319900\u003e"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Request - Response Mapping Success",
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
  "name": "Mapping Config Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.mappingConfig()"
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
  "name": "Input transaction_id : 6855945",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input transaction_biller_id : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputTransactionBillerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input customer_id : 085363783000",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCustomerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input partner_id : 6",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputPartnerId(String)"
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
  "name": "Input biller_id : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputBillerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input biller_label : trunko_test",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input rawdata : {\"customer_number\":\"085363783000\",\"data\":{\"biller_message\":\"Pengisian Voucher sebesar 25000 ke nomor 085363783000 pada tanggal 18/07/2019 09:54:44 telah berhasil dengan no ref \\u003c0051003619319900\\u003e\",\"rc_biller\":\"0000\",\"remote_transaction_id\":\"110931978314\",\"serial_number\":\"0051003619319900\"},\"status\":\"sukses\",\"transaction_id\":6855945}",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRawdata(String)"
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
  "name": "Get transaction_id : 6855945",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "transaction_biller_id : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.transactionBillerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remote_transaction_id : 110931978314",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remote_product_id : PKREG60WS",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer_id : 085363783000",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.customerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response_code : 00",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.responseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "price : 4900",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "amount : 7000",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.amount(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected element property value \u00277000\u0027 is not equal with actual property value \u002750000\u0027\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword$_verifyElementPropertyValue_closure1.doCall(VerifyElementPropertyValueKeyword.groovy:56)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword$_verifyElementPropertyValue_closure1.call(VerifyElementPropertyValueKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword.verifyElementPropertyValue(VerifyElementPropertyValueKeyword.groovy:48)\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyElementPropertyValueKeyword.execute(VerifyElementPropertyValueKeyword.groovy:43)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyElementPropertyValue(WSBuiltInKeywords.groovy:123)\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyElementPropertyValue$0.call(Unknown Source)\n\tat com.ea.steps.Steps.amount(Steps.groovy:181)\n\tat ✽.amount : 7000(/Users/reinard/Documents/Katalon Project/Trunko/Include/features/Kraken - BM Adapter/Request - Response Mapping Success.feature:42)\n",
  "status": "failed"
});
formatter.step({
  "name": "serial_number : 0051003619319900",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.serialNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "biller_rescode : 0000",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "message : Pengisian Voucher sebesar 25000 ke nomor 085363783000 pada tanggal 18/07/2019 09:54:44 telah berhasil dengan no ref \u003c0051003619319900\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "rawdata : {\"customer_number\":\"085363783000\",\"data\":{\"biller_message\":\"Pengisian Voucher sebesar 25000 ke nomor 085363783000 pada tanggal 18/07/2019 09:54:44 telah berhasil dengan no ref \\u003c0051003619319900\\u003e\",\"rc_biller\":\"0000\",\"remote_transaction_id\":\"110931978314\",\"serial_number\":\"0051003619319900\"},\"status\":\"sukses\",\"transaction_id\":6855945}",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.rawdata(String)"
});
formatter.result({
  "status": "skipped"
});
});