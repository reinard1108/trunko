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
Feature: Job

  Background: 
    Given feature : Job

  @TestCaseKey=BPA-T2209
  Scenario Outline: Job Method Get
    Given user get token
    Given api name : <api_name>
    When user send request
    Then user get http response code : <http_response_code>
    And user validate scheme

    Examples: 
      | api_name                            | http_response_code |
      | Get All Job List                    |                200 |
      | Get All Queue                       |                200 |
      | Get Job Instance by Job Id          |                200 |
      | Get List of Job Instances By Server |                200 |
      | Get List of Server Instances        |                200 |
      | Start All Job on Specific Server    |                200 |
      | Start Single Job on Specific Server |                200 |
      | Stop All Job on Specific Server     |                200 |
      | Stop Single Job on Specific Server  |                200 |

  @TestCaseKey=BPA-T2210
  Scenario Outline: Update Job
    Given user get token
    Given api name : <api_name>
    When user input interval : <interval>
    And user input is_active : <is_active>
    And user send request
    Then user get http response code : <http_response_code>
    And user validate scheme

    Examples: 
      | api_name   | interval | is_active | http_response_code |
      | Update Job |        0 | true      |                200 |	
      
@TestCaseKey=BPA-T2211
  Scenario Outline: Update Process Limit
    Given user get token
    Given api name : <api_name>
    When user input process_limit : <process_limit>
    And user send request
    Then user get http response code : <http_response_code>
    And user validate scheme

    Examples: 
      | api_name   | process_limit | http_response_code |
      | Update Job |      0        |                200 |	      
