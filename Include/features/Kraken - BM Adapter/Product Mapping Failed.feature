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
Feature: Product Mapping Failed

  @tag1
  Scenario Outline: Product Mapping Failed
    Given Command Type : <command_type> Config Set
    And Product Mapping : <product_id> Config Not Set 
    When User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then Get response_code : <response_code>
    And message : <message>
    
    Examples:
    | command_type | product_id | response_code | message |
    | purchase | 2 | 99 | Product mapping not found |
    | reversal | 3 | 99 | Product mapping not found |
    | advise | 4 | 99 | Product mapping not found |