$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/reinard/Documents/Katalon Project/Trunko/Include/features/Kraken - BM Adapter/Rules Mapping Success.feature");
formatter.feature({
  "name": "Rules Mapping Success",
  "description": "to ensure mapping between condition and operation run well",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Rules Mapping Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Biller Config Set and Rules set as {\"rules\":[{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"sukses\",\"logic\":\"and\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"a\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"advice\"}]},{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"gagal\",\"logic\":\"or\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"0051003619319900\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"reversal\"}]}]}",
  "keyword": "Given "
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
  "name": "User Get FBS response status : \u003cstatus\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User Get FBS response data.serial_number : \u003cserial_number\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "User get next command : \u003cnext\u003e",
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
        "status",
        "serial_number",
        "next",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "advise",
        "175",
        "sukses",
        "a",
        "advice",
        "200"
      ]
    },
    {
      "cells": [
        "purchase",
        "26",
        "gagal",
        "110931978314",
        "reversal",
        "200"
      ]
    },
    {
      "cells": [
        "inquiry",
        "221",
        "sukses",
        "0051003619319900",
        "reversal",
        "200"
      ]
    },
    {
      "cells": [
        "reversal",
        "175",
        "sukses",
        "serial",
        "null",
        "200"
      ]
    },
    {
      "cells": [
        "reversal",
        "26",
        "gagal",
        "a",
        "reversal",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Rules Mapping Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Biller Config Set and Rules set as {\"rules\":[{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"sukses\",\"logic\":\"and\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"a\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"advice\"}]},{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"gagal\",\"logic\":\"or\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"0051003619319900\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"reversal\"}]}]}",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.BillerConfigSetAndRulesSet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : advise",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input product_id : 175",
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
  "name": "User Get FBS response status : sukses",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFBSResponseStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Get FBS response data.serial_number : a",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFbsResponseSerialNumber(String)"
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
  "status": "passed"
});
formatter.step({
  "name": "User get next command : advice",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Rules Mapping Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Biller Config Set and Rules set as {\"rules\":[{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"sukses\",\"logic\":\"and\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"a\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"advice\"}]},{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"gagal\",\"logic\":\"or\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"0051003619319900\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"reversal\"}]}]}",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.BillerConfigSetAndRulesSet(String)"
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
  "name": "Input product_id : 26",
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
  "name": "User Get FBS response status : gagal",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFBSResponseStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Get FBS response data.serial_number : 110931978314",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFbsResponseSerialNumber(String)"
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
  "status": "passed"
});
formatter.step({
  "name": "User get next command : reversal",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Rules Mapping Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Biller Config Set and Rules set as {\"rules\":[{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"sukses\",\"logic\":\"and\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"a\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"advice\"}]},{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"gagal\",\"logic\":\"or\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"0051003619319900\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"reversal\"}]}]}",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.BillerConfigSetAndRulesSet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : inquiry",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input product_id : 221",
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
  "name": "User Get FBS response status : sukses",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFBSResponseStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Get FBS response data.serial_number : 0051003619319900",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFbsResponseSerialNumber(String)"
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
  "status": "passed"
});
formatter.step({
  "name": "User get next command : reversal",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Rules Mapping Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Biller Config Set and Rules set as {\"rules\":[{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"sukses\",\"logic\":\"and\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"a\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"advice\"}]},{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"gagal\",\"logic\":\"or\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"0051003619319900\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"reversal\"}]}]}",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.BillerConfigSetAndRulesSet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : reversal",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input product_id : 175",
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
  "name": "User Get FBS response status : sukses",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFBSResponseStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Get FBS response data.serial_number : serial",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFbsResponseSerialNumber(String)"
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
  "status": "passed"
});
formatter.step({
  "name": "User get next command : null",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Rules Mapping Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Biller Config Set and Rules set as {\"rules\":[{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"sukses\",\"logic\":\"and\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"a\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"advice\"}]},{\"conditions\":[{\"data\":\"[status]\",\"operator\":\"equal\",\"value\":\"gagal\",\"logic\":\"or\"},{\"data\":\"[data.serial_number]\",\"operator\":\"equal\",\"value\":\"0051003619319900\",\"logic\":\"\"}],\"operations\":[{\"data\":\"next\",\"function\":\"\",\"value\":\"reversal\"}]}]}",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.BillerConfigSetAndRulesSet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : reversal",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input product_id : 26",
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
  "name": "User Get FBS response status : gagal",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFBSResponseStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Get FBS response data.serial_number : a",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetFbsResponseSerialNumber(String)"
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
  "status": "passed"
});
formatter.step({
  "name": "User get next command : reversal",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
});