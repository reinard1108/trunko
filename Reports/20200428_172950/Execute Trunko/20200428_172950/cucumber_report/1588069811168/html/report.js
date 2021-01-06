$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/alterra/Documents/Katalon Project/Trunko/Include/features/Kraken - BM Adapter/Execute Trunko.feature");
formatter.feature({
  "name": "Trunko",
  "description": "  A set of scenarios to test Trunko",
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
        "Command type config not found"
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
  "name": "message : Command type config not found",
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
        "Product type config not found"
      ]
    },
    {
      "cells": [
        "purchase",
        "221",
        "trunko_test",
        "501",
        "Product type config not found"
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
  "name": "message : Product type config not found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
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
  "name": "message : Product type config not found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "new error 501: Pending, waiting Biller\u0027s callback",
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
        "advice",
        "175",
        "trunko_171227693",
        "501",
        "Pending, waiting Biller\u0027s callback"
      ]
    }
  ]
});
formatter.scenario({
  "name": "new error 501: Pending, waiting Biller\u0027s callback",
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
  "name": "User Input biller_label : trunko_171227693",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : advice",
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
  "name": "message : Pending, waiting Biller\u0027s callback",
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
formatter.step({
  "name": "detail : \u003cdetail\u003e",
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
        "PKREG60WS",
        "a",
        "0000",
        "advise message",
        "null"
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
        "PKREG60WS",
        "serial",
        "9006",
        "reversal message",
        "null"
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
        "testPdam",
        "0051003619319900",
        "9012",
        "inquiry message",
        "{acquiring_institution_id\u003d008,admin_charge\u003d0,amount\u003d184000,bill_count\u003d2,bill_repeat_count\u003d2,bills\u003d[{bill_amount\u003d[74000],bill_date\u003d[201709],kubikasi\u003d[527-541],penalty\u003d[0]},{bill_amount\u003d[100000],bill_date\u003d[201708],kubikasi\u003d[527-541],penalty\u003d[10000]}],blth\u003d201708201709,idpel\u003d1998800007,local_trx_date\u003d20171020,local_trx_time\u003d062418,merchant_code\u003d6012,mti\u003d0210,name\u003dSEPULSA2,pan\u003d074003,processing_code\u003d380000,rc\u003d00,retrieval_ref_no\u003d000135739333,rp_tag\u003d184000,settlement_date\u003d20171021,stan\u003d000135739333,transmission_datetime\u003d1020062418}"
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
  "name": "Input remote_product_id : PKREG60WS",
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
formatter.step({
  "name": "detail : null",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.detail(String)"
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
  "name": "Input remote_product_id : PKREG60WS",
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
formatter.step({
  "name": "detail : null",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.detail(String)"
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
  "name": "Input remote_product_id : testPdam",
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
  "name": "remote_product_id : testPdam",
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
formatter.step({
  "name": "detail : {acquiring_institution_id\u003d008,admin_charge\u003d0,amount\u003d184000,bill_count\u003d2,bill_repeat_count\u003d2,bills\u003d[{bill_amount\u003d[74000],bill_date\u003d[201709],kubikasi\u003d[527-541],penalty\u003d[0]},{bill_amount\u003d[100000],bill_date\u003d[201708],kubikasi\u003d[527-541],penalty\u003d[10000]}],blth\u003d201708201709,idpel\u003d1998800007,local_trx_date\u003d20171020,local_trx_time\u003d062418,merchant_code\u003d6012,mti\u003d0210,name\u003dSEPULSA2,pan\u003d074003,processing_code\u003d380000,rc\u003d00,retrieval_ref_no\u003d000135739333,rp_tag\u003d184000,settlement_date\u003d20171021,stan\u003d000135739333,transmission_datetime\u003d1020062418}",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.detail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Response Rules Success",
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
        "biller_label",
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
        "trunko_test",
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
        "trunko_test",
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
        "trunko_test",
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
        "trunko_test",
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
        "trunko_test",
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
  "name": "Response Rules Success",
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
  "name": "Response Rules Success",
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
  "name": "Response Rules Success",
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
  "name": "Response Rules Success",
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
  "name": "Response Rules Success",
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
formatter.scenarioOutline({
  "name": "Response Rules Failed",
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
        "command_type",
        "product_id",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "Reinard",
        "advise",
        "26",
        "200",
        "Invalid response mapping"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Response Rules Failed",
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
  "name": "User Input biller_label : Reinard",
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
  "name": "message : Invalid response mapping",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Convert Biller Response XML to Json Success",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Biller response with XML Content-Type",
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
  "name": "Send request",
  "keyword": "And "
});
formatter.step({
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "User get rawdata in json format",
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
        "command_type",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "Reinard",
        "stock",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Convert Biller Response XML to Json Success",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Biller response with XML Content-Type",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.billerResponseWithXMLContentType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input biller_label : Reinard",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : stock",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
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
  "name": "User get rawdata in json format",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetRawdataInJsonFormat()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Convert Biller Response XML to Json Failed",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Biller response with wrong format XML Content-Type",
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
  "name": "Send request",
  "keyword": "And "
});
formatter.step({
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "User get response : \u003cmessage\u003e",
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
        "command_type",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "trunko_test",
        "stock",
        "200",
        "Invalid Parse XML Response"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Convert Biller Response XML to Json Failed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "Biller response with wrong format XML Content-Type",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.billerResponseWithWrongFormatXMLContentType()"
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
  "name": "User Input command_type : stock",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
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
  "name": "User get response : Invalid Parse XML Response",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetResponse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Function for operation Success",
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
  "name": "remote_transaction_id : \u003cremote_transaction_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "customer_id : \u003ccustomer_id\u003e",
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
        "biller_label",
        "command_type",
        "product_id",
        "http_response_code",
        "remote_transaction_id",
        "customer_id",
        "price",
        "amount",
        "next"
      ]
    },
    {
      "cells": [
        "Reinard",
        "purchase",
        "221",
        "200",
        "lower",
        "replbce",
        "10",
        "12000",
        "UPPER"
      ]
    },
    {
      "cells": [
        "Reinard",
        "purchase",
        "175",
        "200",
        "apel",
        "concat value",
        "51",
        "2",
        "sukses gag"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Function for operation Success",
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
  "name": "User Input biller_label : Reinard",
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
  "name": "User Input product_id : 221",
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
  "name": "remote_transaction_id : lower",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer_id : replbce",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.customerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "price : 10",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "amount : 12000",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get next command : UPPER",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Function for operation Success",
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
  "name": "User Input biller_label : Reinard",
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
  "name": "User Input product_id : 175",
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
  "name": "remote_transaction_id : apel",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer_id : concat value",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.customerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "price : 51",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "amount : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get next command : sukses gag",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Request Rules Success",
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
  "name": "User Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input transaction_id : \u003ctransaction_id\u003e",
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
        "biller_label",
        "command_type",
        "product_id",
        "transaction_id",
        "http_response_code",
        "next"
      ]
    },
    {
      "cells": [
        "Reinard",
        "reversal",
        "26",
        "1",
        "200",
        "success request rules"
      ]
    },
    {
      "cells": [
        "Reinard",
        "reversal",
        "26",
        "2",
        "200",
        "failed request rules"
      ]
    },
    {
      "cells": [
        "stock_test",
        "stock",
        "26",
        "1",
        "200",
        "success request rules"
      ]
    },
    {
      "cells": [
        "stock_test",
        "stock",
        "26",
        "2",
        "200",
        "failed request rules"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Request Rules Success",
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
  "name": "User Input biller_label : Reinard",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "User get next command : success request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request Rules Success",
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
  "name": "User Input biller_label : Reinard",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "User get next command : failed request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request Rules Success",
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
  "name": "User Input biller_label : stock_test",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : stock",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "User get next command : success request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request Rules Success",
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
  "name": "User Input biller_label : stock_test",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : stock",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "User get next command : failed request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Request Rules Success",
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
  "name": "Input customer_id : \u003ccustomer_id\u003e",
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
        "biller_label",
        "command_type",
        "product_id",
        "customer_id",
        "http_response_code",
        "next"
      ]
    },
    {
      "cells": [
        "trunko_171460577",
        "reversal",
        "26",
        "6281282563",
        "200",
        "success start_with"
      ]
    },
    {
      "cells": [
        "trunko_171460577",
        "reversal",
        "26",
        "1282563755",
        "200",
        "success end_with"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Request Rules Success",
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
  "name": "User Input biller_label : trunko_171460577",
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
  "name": "Input customer_id : 6281282563",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCustomerId(String)"
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
  "name": "User get next command : success start_with",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request Rules Success",
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
  "name": "User Input biller_label : trunko_171460577",
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
  "name": "Input customer_id : 1282563755",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCustomerId(String)"
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
  "name": "User get next command : success end_with",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Request Rules Failed",
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
        "command_type",
        "product_id",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "Reinard",
        "advise",
        "175",
        "200",
        "Invalid request mapping"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Request Rules Failed",
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
  "name": "User Input biller_label : Reinard",
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
  "name": "User Input product_id : 175",
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
  "name": "message : Invalid request mapping",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Request using content-type application/x-www-form-urlencoded",
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "biller_label",
        "command_type",
        "product_id",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "trunko_urlencoded",
        "advise",
        "26",
        "200"
      ]
    },
    {
      "cells": [
        "trunko_urlencoded",
        "advise",
        "175",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Request using content-type application/x-www-form-urlencoded",
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
  "name": "User Input biller_label : trunko_urlencoded",
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
  "name": "User Input product_id : 26",
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
  "name": "User Get Http response code : 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request using content-type application/x-www-form-urlencoded",
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
  "name": "User Input biller_label : trunko_urlencoded",
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
  "name": "User Input product_id : 175",
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
  "name": "User Get Http response code : 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.getHttpResponseCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Mapping Config not found",
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
        "command_type",
        "product_id",
        "http_response_code",
        "message",
        "description"
      ]
    },
    {
      "cells": [
        "trunko_mapping_config",
        "inquiry",
        "221",
        "200",
        "Mapping config not found",
        "no rules config"
      ]
    },
    {
      "cells": [
        "trunko_mapping_config",
        "advise",
        "26",
        "200",
        "Mapping config not found",
        "no response rules config"
      ]
    },
    {
      "cells": [
        "trunko_mapping_config",
        "advise",
        "175",
        "200",
        "Mapping config not found",
        "no request rules config"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Mapping Config not found",
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
  "name": "User Input biller_label : trunko_mapping_config",
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
  "name": "User Input product_id : 221",
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
  "name": "message : Mapping config not found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mapping Config not found",
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
  "name": "User Input biller_label : trunko_mapping_config",
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
  "name": "User Input product_id : 26",
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
  "name": "message : Mapping config not found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mapping Config not found",
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
  "name": "User Input biller_label : trunko_mapping_config",
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
  "name": "User Input product_id : 175",
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
  "name": "message : Mapping config not found",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Run all rules condition",
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
  "name": "User Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input transaction_id : \u003ctransaction_id\u003e",
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
        "biller_label",
        "command_type",
        "product_id",
        "transaction_id",
        "http_response_code",
        "next"
      ]
    },
    {
      "cells": [
        "Reinard",
        "purchase",
        "26",
        "1",
        "200",
        "success bosku"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Run all rules condition",
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
  "name": "User Input biller_label : Reinard",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "User get next command : success bosku",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input parameters : \u003cparameters\u003e",
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
        "biller_label",
        "command_type",
        "product_id",
        "parameters",
        "http_response_code",
        "next"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "inquiry",
        "26",
        "1",
        "200",
        "success request rules"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "inquiry",
        "26",
        "2",
        "200",
        "failed request rules"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "purchase",
        "26",
        "1",
        "200",
        "success request rules"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "purchase",
        "26",
        "2",
        "200",
        "failed request rules"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "advice",
        "26",
        "1",
        "200",
        "success request rules"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "advice",
        "26",
        "2",
        "200",
        "failed request rules"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "reversal",
        "26",
        "1",
        "200",
        "success request rules"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "reversal",
        "26",
        "2",
        "200",
        "failed request rules"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "stock",
        "26",
        "1",
        "200",
        "success request rules"
      ]
    },
    {
      "cells": [
        "trunko_170842794",
        "stock",
        "26",
        "2",
        "200",
        "failed request rules"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : success request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : failed request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : success request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : failed request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : advice",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : success request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : advice",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : failed request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : success request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : failed request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : stock",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : success request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Request rules applied for new key \"parameters\"",
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
  "name": "User Input biller_label : trunko_170842794",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : stock",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "User get next command : failed request rules",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Access kraken request payload in response mapping (Operation)",
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
  "name": "Input remote_transaction_id : \u003cremote_transaction_id\u003e",
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
  "name": "Get transaction_id : \u003ctransaction_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "transaction_biller_id : \u003ctransaction_biller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "remote_transaction_id : \u003cremote_product_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "remote_product_id : \u003cremote_product_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "customer_id : \u003ctransaction_biller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "serial_number : \u003cpartner_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "biller_rescode : \u003ccommand_type\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "message : \u003ccustomer_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "detail : \u003cremote_transaction_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User get next command : \u003ctransaction_id\u003e",
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
        "transaction_id",
        "transaction_biller_id",
        "customer_id",
        "partner_id",
        "rawdata",
        "remote_transaction_id",
        "remote_product_id",
        "serial_number",
        "message",
        "detail"
      ]
    },
    {
      "cells": [
        "advise",
        "175",
        "trunko_BPA262",
        "200",
        "1",
        "1",
        "085363783001",
        "6",
        "rawdata",
        "a",
        "PKREG60WS",
        "a",
        "advise message",
        "null"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Access kraken request payload in response mapping (Operation)",
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
  "name": "User Input biller_label : trunko_BPA262",
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
  "name": "Input remote_transaction_id : a",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRemoteTransactionId(String)"
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
  "name": "Input remote_product_id : PKREG60WS",
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
  "name": "remote_transaction_id : PKREG60WS",
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
  "name": "customer_id : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.customerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "serial_number : 6",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.serialNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "biller_rescode : advise",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : 085363783001",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "detail : a",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.detail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get next command : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Access kraken request payload in response mapping (Operation)",
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
  "name": "Input remote_transaction_id : \u003cremote_transaction_id\u003e",
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
  "name": "Input biller_id : \u003cbiller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input parameters : \u003cparameters\u003e",
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
  "name": "Get transaction_id : \u003ctransaction_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "transaction_biller_id : \u003ctransaction_biller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "remote_transaction_id : \u003cparameters\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "remote_product_id : \u003cremote_product_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "customer_id : \u003crawdata\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "serial_number : \u003cbiller_label\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "biller_rescode : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "message : \u003cbiller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User get next command : 20",
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
        "biller_id",
        "http_response_code",
        "transaction_id",
        "transaction_biller_id",
        "remote_transaction_id",
        "customer_id",
        "partner_id",
        "rawdata",
        "parameters",
        "remote_product_id",
        "serial_number",
        "message",
        ""
      ]
    },
    {
      "cells": [
        "purchase",
        "26",
        "trunko_BPA262",
        "3",
        "200",
        "1",
        "1",
        "genfm",
        "085363783001",
        "6",
        "rawdata",
        "parambos",
        "testElec",
        "a",
        "advise message",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Access kraken request payload in response mapping (Operation)",
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
  "name": "User Input biller_label : trunko_BPA262",
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
  "name": "Input remote_transaction_id : genfm",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRemoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input remote_product_id : testElec",
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
  "name": "Input biller_id : 3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputBillerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input parameters : parambos",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
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
  "name": "remote_transaction_id : parambos",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "remote_product_id : testElec",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.remoteProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer_id : rawdata",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.customerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "serial_number : trunko_BPA262",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.serialNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "biller_rescode : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : 3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get next command : 20",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetNextCommand(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Access kraken request payload in response mapping (Condition)",
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
  "name": "Input remote_transaction_id : \u003cremote_transaction_id\u003e",
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
  "name": "Input biller_id : \u003cbiller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input parameters : \u003cparameters\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Send request for this scenario only",
  "keyword": "And "
});
formatter.step({
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "biller_rescode : \u003ccommand_type\u003e",
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
        "command_type",
        "transaction_id",
        "transaction_biller_id",
        "remote_transaction_id",
        "remote_product_id",
        "customer_id",
        "partner_id",
        "product_id",
        "biller_id",
        "counter",
        "rawdata",
        "parameters",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "trunko_BPA262",
        "advise",
        "1",
        "1",
        "110931978314",
        "asd",
        "085363783001",
        "6",
        "26",
        "1",
        "20",
        "hi",
        "param",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Access kraken request payload in response mapping (Condition)",
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
  "name": "User Input biller_label : trunko_BPA262",
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
  "name": "Input remote_transaction_id : 110931978314",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRemoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input remote_product_id : asd",
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
  "name": "Input rawdata : hi",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRawdata(String)"
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
  "name": "Input parameters : param",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send request for this scenario only",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.sendRequestForThisScenarioOnly()"
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
  "name": "biller_rescode : advise",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Access kraken request payload in response mapping - Mapping still occured eventhough biller response is 404",
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
  "name": "Input remote_transaction_id : \u003cremote_tr\tansaction_id\u003e",
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
  "name": "Input biller_id : \u003cbiller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input parameters : \u003cparameters\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Send request for this scenario only",
  "keyword": "And "
});
formatter.step({
  "name": "User Get Http response code : \u003chttp_response_code\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "biller_rescode : \u003ccommand_type\u003e",
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
        "command_type",
        "transaction_id",
        "transaction_biller_id",
        "remote_transaction_id",
        "remote_product_id",
        "customer_id",
        "partner_id",
        "product_id",
        "biller_id",
        "counter",
        "rawdata",
        "parameters",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "trunko_BPA262",
        "purchase",
        "1",
        "1",
        "110931978314",
        "asd",
        "085363783001",
        "6",
        "175",
        "1",
        "20",
        "hi",
        "param",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Access kraken request payload in response mapping - Mapping still occured eventhough biller response is 404",
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
  "name": "User Input biller_label : trunko_BPA262",
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
  "name": "Input remote_transaction_id : \u003cremote_tr\tansaction_id\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRemoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input remote_product_id : asd",
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
  "name": "Input rawdata : hi",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRawdata(String)"
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
  "name": "Input parameters : param",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send request for this scenario only",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.sendRequestForThisScenarioOnly()"
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
  "name": "biller_rescode : purchase",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Access kraken request payload in response mapping - Mapping still occured eventhough biller timeout",
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
  "name": "Input remote_transaction_id : \u003cremote_transaction_id\u003e",
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
  "name": "Input biller_id : \u003cbiller_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input parameters : \u003cparameters\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Send request for this scenario only",
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
formatter.step({
  "name": "biller_rescode : \u003ccommand_type\u003e",
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
        "command_type",
        "transaction_id",
        "transaction_biller_id",
        "remote_transaction_id",
        "remote_product_id",
        "customer_id",
        "partner_id",
        "product_id",
        "biller_id",
        "counter",
        "rawdata",
        "parameters",
        "message",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "trunko_BPA262",
        "reversal",
        "1",
        "1",
        "110931978314",
        "asd",
        "085363783001",
        "6",
        "175",
        "1",
        "20",
        "hi",
        "param",
        "Timeout",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Access kraken request payload in response mapping - Mapping still occured eventhough biller timeout",
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
  "name": "User Input biller_label : trunko_BPA262",
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
  "name": "Input remote_transaction_id : 110931978314",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRemoteTransactionId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input remote_product_id : asd",
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
  "name": "Input rawdata : hi",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputRawdata(String)"
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
  "name": "Input parameters : param",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputParameters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send request for this scenario only",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.sendRequestForThisScenarioOnly()"
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
  "name": "message : Timeout",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "biller_rescode : reversal",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Kraken halt process",
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
        "command_type",
        "product_id",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "trunko_BPA278",
        "advise",
        "26",
        "501",
        "kraken-halt-process"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Kraken halt process",
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
  "name": "User Input biller_label : trunko_BPA278",
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
  "name": "User Input product_id : 26",
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
  "name": "message : kraken-halt-process",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Condition support function",
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
  "name": "User Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Send request for BPA279",
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
        "command_type",
        "product_id",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "trunko_BPA279",
        "advise",
        "26",
        "200",
        "berhasil cuk"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Condition support function",
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
  "name": "User Input biller_label : trunko_BPA279",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send request for BPA279",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.sendRequestfotBPA279()"
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
  "name": "message : berhasil cuk",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Improve rules condition from skip to false",
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
  "name": "User Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input transaction_id : \u003ctransaction_id\u003e",
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
        "biller_label",
        "command_type",
        "product_id",
        "transaction_id",
        "http_response_code",
        "message"
      ]
    },
    {
      "cells": [
        "trunko_BPA360",
        "advice",
        "26",
        "20",
        "200",
        "condition false berhasil"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Improve rules condition from skip to false",
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
  "name": "User Input biller_label : trunko_BPA360",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : advice",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input transaction_id : 20",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputTransactionId(String)"
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
formatter.scenarioOutline({
  "name": "Rules: new func and new operator",
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
  "name": "User Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input transaction_id : \u003ctransaction_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input customer_id : \u003ccustomer_id\u003e",
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
formatter.step({
  "name": "biller_rescode : \u003cbiller_rescode\u003e",
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
        "command_type",
        "product_id",
        "transaction_id",
        "customer_id",
        "http_response_code",
        "message",
        "biller_rescode"
      ]
    },
    {
      "cells": [
        "trunko_BPA65",
        "advice",
        "26",
        "1",
        "085363783001",
        "200",
        "42810cb02db3bb2cbb428af0d8b0376e",
        "739b9d664d77db3ee3cab40737c6386fb7b6ef9e00b31a434fd7680e69482ba0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Rules: new func and new operator",
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
  "name": "User Input biller_label : trunko_BPA65",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : advice",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "message : 42810cb02db3bb2cbb428af0d8b0376e",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "biller_rescode : 739b9d664d77db3ee3cab40737c6386fb7b6ef9e00b31a434fd7680e69482ba0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Rules: New func generate random number",
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
  "name": "User Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input customer_id : \u003ccustomer_id\u003e",
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
  "name": "User get message in 16 digit random number",
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
        "command_type",
        "product_id",
        "customer_id",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "trunko_BPA446",
        "advice",
        "26",
        "085363783001",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Rules: New func generate random number",
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
  "name": "User Input biller_label : trunko_BPA446",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputBillerLabel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input command_type : advice",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputCommandType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "User get message in 16 digit random number",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userGetMessageInRandomNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Rules: transaction_biller_id can be mapped",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestCaseKey\u003dBPA-T925"
    }
  ]
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
  "name": "User Input product_id : \u003cproduct_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input transaction_biller_id : \u003ctransaction_biller_id\u003e",
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
  "name": "transaction_biller_id : \u003ctransaction_biller_id\u003e",
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
        "command_type",
        "product_id",
        "transaction_biller_id",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "trunko_BPA498",
        "purchase",
        "26",
        "1",
        "200"
      ]
    },
    {
      "cells": [
        "trunko_BPA498",
        "purchase",
        "26",
        "2",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Rules: transaction_biller_id can be mapped",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@TestCaseKey\u003dBPA-T925"
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
  "name": "User Input biller_label : trunko_BPA498",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "transaction_biller_id : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.transactionBillerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Rules: transaction_biller_id can be mapped",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@TestCaseKey\u003dBPA-T925"
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
  "name": "User Input biller_label : trunko_BPA498",
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
  "name": "User Input product_id : 26",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.userInputProductId(String)"
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
  "name": "transaction_biller_id : 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.transactionBillerId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Binding kraken request: rawdata, biller config: partner_mapping, biller config: partner_mapping, new function: getpartnerpackagefee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestCaseKey\u003dBPA-T926"
    }
  ]
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
  "name": "Input partner_id : \u003cpartner_id\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Input product_id : \u003cproduct_id\u003e",
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
  "name": "biller_rescode : \u003cbiller_rescode\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "message : \u003cmessage\u003e",
  "keyword": "And "
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
        "biller_label",
        "command_type",
        "product_id",
        "partner_id",
        "rawdata",
        "http_response_code",
        "biller_rescode",
        "message",
        "price"
      ]
    },
    {
      "cells": [
        "trunko_BPA451",
        "purchase",
        "26",
        "1",
        "{\\\"customer_id\\\":\\\"customer\\\"}",
        "200",
        "customer",
        "dsa",
        "31000"
      ]
    },
    {
      "cells": [
        "trunko_BPA451",
        "purchase",
        "175",
        "1",
        "{\\\"customer_id\\\":\\\"customer\\\"}",
        "200",
        "customer",
        "dsa",
        "5900"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Binding kraken request: rawdata, biller config: partner_mapping, biller config: partner_mapping, new function: getpartnerpackagefee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@TestCaseKey\u003dBPA-T926"
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
  "name": "User Input biller_label : trunko_BPA451",
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
  "name": "Input partner_id : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputPartnerId(String)"
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
  "name": "Input rawdata : {\\\"customer_id\\\":\\\"customer\\\"}",
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
  "name": "biller_rescode : customer",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : dsa",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "price : 31000",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.price(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Binding kraken request: rawdata, biller config: partner_mapping, biller config: partner_mapping, new function: getpartnerpackagefee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@TestCaseKey\u003dBPA-T926"
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
  "name": "User Input biller_label : trunko_BPA451",
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
  "name": "Input partner_id : 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.inputPartnerId(String)"
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
  "name": "Input rawdata : {\\\"customer_id\\\":\\\"customer\\\"}",
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
  "name": "biller_rescode : customer",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerRescode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message : dsa",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "price : 5900",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.price(String)"
});
formatter.result({
  "status": "passed"
});
});