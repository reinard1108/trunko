$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/reinard/Documents/Katalon Project/Trunko/Include/features/API Biller CRUD/Update Biller Config Success.feature");
formatter.feature({
  "name": "Update Biller Config Success",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Update Biller Config Success",
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
formatter.step({
  "name": "Biller Config Updated",
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
        "body",
        "Method",
        "url",
        "http_response_code"
      ]
    },
    {
      "cells": [
        "8",
        "{\"Key\":\"Value\"}",
        "POST",
        "https://trunko.sumpahpalapa.com/biller/id/config",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Update Biller Config Success",
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
  "name": "User Input id : 8",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.userInputId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Request body : {\"Key\":\"Value\"}",
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
  "name": "Biller Config Updated",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.billerConfigUpdated()"
});
formatter.result({
  "status": "passed"
});
});