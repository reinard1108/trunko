#Author: marcoanjing@your.domain.com
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
Feature: Update Biller Config Success

  @tag1
  Scenario Outline: Update Biller Config Success
    Given url : <url>
    And Method : <Method>
    When User Input id : <id>
    And Request body : <body>
    And Send request
    Then User Get Http response code : <http_response_code>
    And Biller Config Updated
    
    Examples:
    | id | body | Method | url | http_response_code | 
    | 8 | {"Key":"Value"} | POST | https://trunko.sumpahpalapa.com/biller/id/config | 200 |