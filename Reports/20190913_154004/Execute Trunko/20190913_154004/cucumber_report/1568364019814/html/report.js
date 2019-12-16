$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/reinard/Documents/Katalon Project/Trunko/Include/features/Kraken - BM Adapter/Execute Trunko.feature");
formatter.feature({
  "name": "Trunko",
  "description": "A set of scenarios to test Trunko",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Biller Config Not Found",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Biller Config : \u003cbiller_label\u003e Not Set",
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
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "message : \u003cmessage\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "biller_label",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "tidak ada",
        "501",
        "Biller config not found"
      ]
    },
    {
      "cells": [
        "TestBiller",
        "501",
        "Biller config not found"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Biller Config Not Found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Biller Config : tidak ada Not Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.billerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input biller_label : tidak ada",
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
  "name": "User Get Http response code : 501",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : Biller config not found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Biller Config Not Found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Biller Config : TestBiller Not Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.billerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input biller_label : TestBiller",
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
  "name": "User Get Http response code : 501",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : Biller config not found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Product Mapping Not Found",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Product Mapping : \u003cproduct_id\u003e Config Not Set",
  "keyword": "Given "
});
formatter.step({
  "name": "User Input biller_label : \u003cbiller_label\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Input product_id : \u003cproduct_id\u003e",
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
formatter.step({
  "name": "message : \u003cmessage\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "biller_label",
        "product_id",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "trunko_test",
        "2",
        "501",
        "Product mapping not found"
      ]
    },
    {
      "cells": [
        "trunko_test",
        "300000",
        "501",
        "Product mapping not found"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Product Mapping Not Found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Product Mapping : 2 Config Not Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.productMapping(String)"
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
  "name": "User Input product_id : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "User Get Http response code : 501",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : Product mapping not found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Product Mapping Not Found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Product Mapping : 300000 Config Not Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.productMapping(String)"
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
  "name": "User Input product_id : 300000",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "User Get Http response code : 501",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : Product mapping not found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Command Type Config Not Found",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Command Type : \u003ccommand_type\u003e Config Set",
  "keyword": "Given "
});
formatter.step({
  "name": "User Input biller_label : \u003cbiller_label\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Input command_type : \u003ccommand_type\u003e",
  "keyword": "And "
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
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "message : \u003cmessage\u003e",
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
        "biller_label",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "test",
        "175",
        "trunko_test",
        "501",
        "Command type api config not Found"
      ]
    },
    {
      "cells": [
        "purchase",
        "221",
        "trunko_test",
        "501",
        "Command type api config not Found"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Command Type Config Not Found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Command Type : test Config Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.commandType(String)"
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
  "name": "User Input command_type : test",
  "keyword": "And "
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
  "name": "User Get Http response code : 501",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : Command type api config not Found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Command Type Config Not Found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
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
  "name": "User Input command_type : purchase",
  "keyword": "And "
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
  "name": "User Get Http response code : 501",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : Command type api config not Found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Product Type Config Not Found",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Product Type Not Set",
  "keyword": "Given "
});
formatter.step({
  "name": "User Input biller_label : \u003cbiller_label\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Input command_type : \u003ccommand_type\u003e",
  "keyword": "And "
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
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "message : \u003cmessage\u003e",
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
        "biller_label",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "purchase",
        "175",
        "trunko_test",
        "501",
        "Product type api config not Found"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Product Type Config Not Found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Product Type Not Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.productTypeNotSet()"
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
  "name": "User Input command_type : purchase",
  "keyword": "And "
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
  "name": "User Get Http response code : 501",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : Product type api config not Found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Execute Success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Biller Config Set",
  "keyword": "Given "
});
formatter.step({
  "name": "User Input biller_label : \u003cbiller_label\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Input command_type : \u003ccommand_type\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
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
  "name": "Input remote_product_id : \u003cremote_product_id\u003e",
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
  "name": "Input rawdata : \u003crawdata\u003e",
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
formatter.step({
  "name": "Get response_code : \u003cresponse_code\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Get transaction_id : \u003ctransaction_id\u003e",
  "keyword": "And "
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "command_type",
        "product_id",
        "biller_label",
        "http_response_code",
        "response_code",
        "transaction_id",
        "transaction_biller_id",
        "customer_id",
        "partner_id",
        "rawdata",
        "remote_transaction_id",
        "remote_product_id",
        "serial_number",
        "biller_rescode",
        "message",
        "detail"
      ]
    },
    {
      "cells": [
        "advise",
        "175",
        "trunko_test",
        "200",
        "00",
        "1",
        "1",
        "085363783001",
        "6",
        "rawdata",
        "a",
        "x",
        "a",
        "0000",
        "advise message",
        "a"
      ]
    },
    {
      "cells": [
        "reversal",
        "175",
        "trunko_test",
        "200",
        "20",
        "2",
        "2",
        "085363783002",
        "6",
        "rawdata",
        "abc",
        "y",
        "serial",
        "9006",
        "reversal message",
        "b"
      ]
    },
    {
      "cells": [
        "inquiry",
        "221",
        "trunko_test",
        "200",
        "22",
        "3",
        "3",
        "085363783003",
        "6",
        "rawdata",
        "110931978314",
        "z",
        "0051003619319900",
        "9012",
        "inquiry message",
        "c"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Execute Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Biller Config Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.BillerConfigSet()"
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
  "name": "User Input command_type : advise",
  "keyword": "And "
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
  "name": "Input transaction_id : 1",
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
  "name": "Input remote_product_id : x",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRemoteProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input customer_id : 085363783001",
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
  "name": "Input rawdata : rawdata",
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
  "name": "Get response_code : 00",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.getResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get transaction_id : 1",
  "keyword": "And "
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
  "name": "remote_transaction_id : a",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remote_product_id : x",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer_id : 085363783001",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.customerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "serial_number : a",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.serialNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "biller_rescode : 0000",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : advise message",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Execute Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Biller Config Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.BillerConfigSet()"
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
  "name": "User Input command_type : reversal",
  "keyword": "And "
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
  "name": "Input transaction_id : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input transaction_biller_id : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputTransactionBillerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input remote_product_id : y",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRemoteProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input customer_id : 085363783002",
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
  "name": "Input rawdata : rawdata",
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
  "name": "Get response_code : 20",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.getResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get transaction_id : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.getTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "transaction_biller_id : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.transactionBillerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remote_transaction_id : abc",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remote_product_id : y",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer_id : 085363783002",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.customerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "serial_number : serial",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.serialNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "biller_rescode : 9006",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : reversal message",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Execute Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Biller Config Set",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.BillerConfigSet()"
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
  "name": "User Input command_type : inquiry",
  "keyword": "And "
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
  "name": "Input transaction_id : 3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input transaction_biller_id : 3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputTransactionBillerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input remote_product_id : z",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRemoteProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input customer_id : 085363783003",
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
  "name": "Input rawdata : rawdata",
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
  "name": "Get response_code : 22",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.getResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get transaction_id : 3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.getTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "transaction_biller_id : 3",
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
  "name": "remote_product_id : z",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer_id : 085363783003",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.customerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "serial_number : 0051003619319900",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.serialNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "biller_rescode : 9012",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : inquiry message",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Rules Mapping Success",
  "description": "",
  "keyword": "Scenario Outline"
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