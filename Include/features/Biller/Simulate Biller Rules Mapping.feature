#Author: reinard@alterra.id
Feature: Biller

  Background: 
    Given base url : https://trunko.sumpahpalapa.com/

  Scenario Outline: Simulate Success
    Given path : <path>
    Given api name : <api_name>
    When user input content type : <content_type>
    And user input mapping : <mapping>
    And user input rules : <rules>
    And user input response_code_mapping : <response_code_mapping>
    And user input content : <content>
    And user send request
    Then user get http response code : <http_response_code>
    And user verify simulate success details

    Examples: 
      | path            | api_name                      | content_type | mapping  | rules                                                                                                                                                                                                                                                                          | response_code_mapping                                        | content                                    | http_response_code |
      | biller/simulate | Simulate Biller Rules Mapping | json         | response | {\\"request\\":[],\\"response\\":[{\\"label\\":\\"success\\",\\"conditions\\":[{\\"data\\":\\"[status]\\",\\"logic\\":\\"and\\",\\"operator\\":\\"equal\\",\\"value\\":\\"asd\\"}],\\"operations\\":[{\\"data\\":\\"next\\",\\"function\\":\\"text\\",\\"value\\":\\"a\\"}]}]} | {\\"10\\":[{\\"biller_rc\\":\\"10\\",\\"message\\":\\"\\"}]} | {\\"status\\":\\"asd\\"}                   |                200 |
      | biller/simulate | Simulate Biller Rules Mapping | url          | response | {\\"request\\":[],\\"response\\":[{\\"label\\":\\"success\\",\\"conditions\\":[{\\"data\\":\\"[status]\\",\\"logic\\":\\"and\\",\\"operator\\":\\"equal\\",\\"value\\":\\"asd\\"}],\\"operations\\":[{\\"data\\":\\"next\\",\\"function\\":\\"text\\",\\"value\\":\\"a\\"}]}]} | {\\"10\\":[{\\"biller_rc\\":\\"10\\",\\"message\\":\\"\\"}]} | https://trunko.sumpahpalapa.com?status=asd |                200 |
      | biller/simulate | Simulate Biller Rules Mapping | xml          | response | {\\"request\\":[],\\"response\\":[{\\"label\\":\\"success\\",\\"conditions\\":[{\\"data\\":\\"[status]\\",\\"logic\\":\\"and\\",\\"operator\\":\\"equal\\",\\"value\\":\\"asd\\"}],\\"operations\\":[{\\"data\\":\\"next\\",\\"function\\":\\"text\\",\\"value\\":\\"a\\"}]}]} | {\\"10\\":[{\\"biller_rc\\":\\"10\\",\\"message\\":\\"\\"}]} | <status>asd</status>                       |                200 |

  Scenario Outline: Simulate Failed - Invalid Mapping
    Given path : <path>
    Given api name : <api_name>
    When user input content type : <content_type>
    And user input mapping : <mapping>
    And user input rules : <rules>
    And user input response_code_mapping : <response_code_mapping>
    And user input content : <content>
    And user send request
    Then user get http response code : <http_response_code>
    And user get error message : <message>

    Examples: 
      | path            | api_name                      | content_type | mapping  | rules                                                                                                                                                                                                                                                                          | response_code_mapping                                        | content                                 | http_response_code | message                                 |
      | biller/simulate | Simulate Biller Rules Mapping | json         | response | {\\"request\\":[],\\"response\\":[{\\"label\\":\\"success\\",\\"conditions\\":[{\\"data\\":\\"[status]\\",\\"logic\\":\\"and\\",\\"operator\\":\\"equal\\",\\"value\\":\\"asd\\"}],\\"operations\\":[{\\"data\\":\\"next\\",\\"function\\":\\"text\\",\\"value\\":\\"a\\"}]}]} | {\\"10\\":[{\\"biller_rc\\":\\"10\\",\\"message\\":\\"\\"}]} | {\\"asd\\":\\"asd\\"}                   |                200 | Conditions Data doesn't exist: [status] |
      | biller/simulate | Simulate Biller Rules Mapping | url          | response | {\\"request\\":[],\\"response\\":[{\\"label\\":\\"success\\",\\"conditions\\":[{\\"data\\":\\"[status]\\",\\"logic\\":\\"and\\",\\"operator\\":\\"equal\\",\\"value\\":\\"asd\\"}],\\"operations\\":[{\\"data\\":\\"next\\",\\"function\\":\\"text\\",\\"value\\":\\"a\\"}]}]} | {\\"10\\":[{\\"biller_rc\\":\\"10\\",\\"message\\":\\"\\"}]} | https://trunko.sumpahpalapa.com?asd=asd |                200 | Conditions Data doesn't exist: [status] |
      | biller/simulate | Simulate Biller Rules Mapping | xml          | response | {\\"request\\":[],\\"response\\":[{\\"label\\":\\"success\\",\\"conditions\\":[{\\"data\\":\\"[status]\\",\\"logic\\":\\"and\\",\\"operator\\":\\"equal\\",\\"value\\":\\"asd\\"}],\\"operations\\":[{\\"data\\":\\"next\\",\\"function\\":\\"text\\",\\"value\\":\\"a\\"}]}]} | {\\"10\\":[{\\"biller_rc\\":\\"10\\",\\"message\\":\\"\\"}]} | <asd>asd</asd>                          |                200 | Conditions Data doesn't exist: [status] |

  Scenario Outline: Simulate Failed - Invalid Content
    Given path : <path>
    Given api name : <api_name>
    When user input content type : <content_type>
    And user input mapping : <mapping>
    And user input rules : <rules>
    And user input response_code_mapping : <response_code_mapping>
    And user input content : <content>
    And user send request
    Then user get http response code : <http_response_code>
    And user get validation error content : <message>

    Examples: 
      | path            | api_name                      | content_type | mapping  | rules                                                                                                                                                                                                                                                                          | response_code_mapping                                        | content               | http_response_code | message               |
      | biller/simulate | Simulate Biller Rules Mapping | json         | response | {\\"request\\":[],\\"response\\":[{\\"label\\":\\"success\\",\\"conditions\\":[{\\"data\\":\\"[status]\\",\\"logic\\":\\"and\\",\\"operator\\":\\"equal\\",\\"value\\":\\"asd\\"}],\\"operations\\":[{\\"data\\":\\"next\\",\\"function\\":\\"text\\",\\"value\\":\\"a\\"}]}]} | {\\"10\\":[{\\"biller_rc\\":\\"10\\",\\"message\\":\\"\\"}]} | <asd>asd</asd>        |                400 | Invalid JSON          |
      | biller/simulate | Simulate Biller Rules Mapping | url          | response | {\\"request\\":[],\\"response\\":[{\\"label\\":\\"success\\",\\"conditions\\":[{\\"data\\":\\"[status]\\",\\"logic\\":\\"and\\",\\"operator\\":\\"equal\\",\\"value\\":\\"asd\\"}],\\"operations\\":[{\\"data\\":\\"next\\",\\"function\\":\\"text\\",\\"value\\":\\"a\\"}]}]} | {\\"10\\":[{\\"biller_rc\\":\\"10\\",\\"message\\":\\"\\"}]} | {\\"asd\\":\\"asd\\"} |                400 | Invalid parse content |
      | biller/simulate | Simulate Biller Rules Mapping | xml          | response | {\\"request\\":[],\\"response\\":[{\\"label\\":\\"success\\",\\"conditions\\":[{\\"data\\":\\"[status]\\",\\"logic\\":\\"and\\",\\"operator\\":\\"equal\\",\\"value\\":\\"asd\\"}],\\"operations\\":[{\\"data\\":\\"next\\",\\"function\\":\\"text\\",\\"value\\":\\"a\\"}]}]} | {\\"10\\":[{\\"biller_rc\\":\\"10\\",\\"message\\":\\"\\"}]} | {\\"asd\\":\\"asd\\"} |                400 | Invalid XML           |
