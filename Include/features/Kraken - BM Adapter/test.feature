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

  @TestCaseKey=BPA-T926
  Scenario Outline: Binding kraken request: rawdata, biller config: partner_mapping, biller config: partner_mapping, new function: getpartnerpackagefee
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input partner_id : <partner_id>
    And Input product_id : <product_id>
    And Input rawdata : <rawdata>
    And Send request
    Then User Get Http response code : <http_response_code>
    And biller_rescode : <biller_rescode>
    And message : <message>
    And price : <price>

    Examples: 
      | biller_label  | command_type | product_id | partner_id | rawdata                            | http_response_code | biller_rescode | message | price |
      | trunko_BPA451 | purchase     |         26 |          1 | {\\"customer_id\\":\\"customer\\"} |                200 | customer       | dsa     | 31000 |
