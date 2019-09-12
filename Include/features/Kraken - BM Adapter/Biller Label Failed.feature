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
Feature: Biller Label Failed

  @tag1
  Scenario Outline: Biller Label Failed
    Given Biller Label : <biller_label> Not Set
    When User Input biller_label : <biller_label>
    And Send request
    Then Get response_code : <response_code>
    And message : <message>
    
    Examples:
    | biller_label | response_code | message |
    | test | 99 | Biller config not found |
