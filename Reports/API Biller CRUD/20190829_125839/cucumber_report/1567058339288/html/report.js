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
  "status": "passed"
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
  "status": "passed"
});
});