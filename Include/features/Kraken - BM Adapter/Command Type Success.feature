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
Feature: Command Type Success

  @tag1
  Scenario Outline: Command Type Success
    Given Command Type : <command_type> Config Set
    When User Input command_type : <command_type>
    And Send request
    Then Get response_code : <response_code>
    
    Examples:
    | command_type | response_code |
    | purchase | 00 |
    | advise | 00 | 
    | reversal | 00 |