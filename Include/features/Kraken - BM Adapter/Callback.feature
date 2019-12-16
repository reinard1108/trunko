#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Title of your feature
  I want to use this template for my feature file

  Scenario Outline: Callback Fail - Biller not found
    Given Biller Config Set
    And Method : <method>
    When User hit trunko callback with invalid biller
    And User send callback
    Then User Get Http response code : <http_response_code>
    And User get response : <response>

    Examples: 
      | method | http_response_code | response         |
      | get    |                403 | Biller not found |
      | post   |                403 | Biller not found |

  Scenario Outline: Callback Fail - IP not registered
    Given Biller Config Set
    And Method : <method>
    When User hit trunko callback from ip that is not registered
    And User send callback
    Then User Get Http response code : <http_response_code>
    And User get response : <response>

    Examples: 
      | method | http_response_code | response            |
      | get    |                403 | Biller Unauthorized |
      | post   |                403 | Biller Unauthorized |

  Scenario Outline: Callback Fail - Invalid Payload
    Given Biller Config Set
    And Method : <method>
    When User hit trunko callback with valid biller
    But User input invalid payload
    And User send callback
    Then User Get Http response code : <http_response_code>
    And User get response : <response>

    Examples: 
      | method | http_response_code | response                |
      | get    |                400 | Can't read request body |
      | post   |                400 | Can't read request body |

  Scenario Outline: Callback Fail - Without Payload
    Given Biller Config Set
    And Method : <method>
    When User hit trunko callback with valid biller
    But User input without payload
    And User send callback
    Then User Get Http response code : <http_response_code>
    And User get response : <response>

    Examples: 
      | method | http_response_code | response                |
      | get    |                400 | Can't read request body |
      | post   |                400 | Can't read request body |

  Scenario Outline: Callback Success
    Given Biller Config Set
    And Method : <method>
    And Content-Type : <content-type>
    When User hit trunko callback with valid biller
    And User input valid payload and send callback
    Then User Get Http response code : <http_response_code>
    And User get response : <response>
    And User verify response map accordingly

    Examples: 
      | method | content-type                      | http_response_code | response |
      | get    | anything                          |                200 | success  |
      | post   | application/json                  |                200 | success  |
      | post   | application/xml                   |                200 | success  |
      | post   | application/x-www-form-urlencoded |                200 | success  |
      | post   | multipart/form-data               |                200 | success  |
