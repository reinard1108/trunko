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
Feature: Trunko
A set of scenarios to test Trunko
 
  Scenario Outline: Biller Config Not Found
    Given Biller Config : <biller_label> Not Set
    When User Input biller_label : <biller_label>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>
    
    Examples:
    | biller_label | http_response_code | message 								|
    | tidak ada    | 501                | Biller config not found |
    | TestBiller   | 501                | Biller config not found |

Scenario Outline: Product Mapping Not Found  	
    Given Product Mapping : <product_id> Config Not Set 
    When User Input biller_label : <biller_label>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>
    
    Examples:
    | biller_label | product_id | http_response_code | message 									|
    | trunko_test  | 2          | 501                | Product mapping not found |
    | trunko_test  | 300000     | 501                | Product mapping not found |

Scenario Outline: Command Type Config Not Found  	
    Given Command Type : <command_type> Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>
    
    Examples:
    | command_type | product_id | biller_label | http_response_code | message 													| 
    | test         | 175        | trunko_test  | 501                | Command type api config not Found |
    | purchase     | 221        | trunko_test  | 501                | Command type api config not Found |

Scenario Outline: Product Type Config Not Found
    Given Product Type Not Set 
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>
    
    Examples:
    | command_type | product_id | biller_label | http_response_code | message 													| 
    | purchase     | 175        | trunko_test  | 501                | Product type api config not Found |
    
Scenario Outline: Execute Success 
To Test Configurable Command Type and Data mapping
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Input transaction_biller_id : <transaction_biller_id> 
    And Input remote_product_id : <remote_product_id>
    And Input customer_id : <customer_id>
    And Input partner_id : <partner_id>
    And Input rawdata : <rawdata>
    And Send request
    Then User Get Http response code : <http_response_code>
    And Get response_code : <response_code>
    And Get transaction_id : <transaction_id>
    And transaction_biller_id : <transaction_biller_id>
    And remote_transaction_id : <remote_transaction_id>
    And remote_product_id : <remote_product_id>
    And customer_id : <customer_id>
    And serial_number : <serial_number>
    And biller_rescode : <biller_rescode>
    And message : <message>
    
    
    Examples:
    | command_type | product_id | biller_label | http_response_code | response_code | transaction_id | transaction_biller_id | customer_id  | partner_id | rawdata | remote_transaction_id | remote_product_id | serial_number    | biller_rescode | message          | detail | 
    | advise       | 175        | trunko_test  | 200                | 00 						| 1      				 | 1										 | 085363783001 | 6 				 | rawdata |      a                | x                 | a                | 0000           | advise message   | a      |        
    | reversal     | 175        | trunko_test  | 200                | 20 						| 2      				 | 2										 | 085363783002 | 6 				 | rawdata |      abc              | y                 | serial           | 9006           | reversal message | b      |
    | inquiry      | 221        | trunko_test  | 200                | 22						| 3      				 | 3										 | 085363783003 | 6 				 | rawdata |      110931978314     | z                 | 0051003619319900 | 9012           | inquiry message  | c      |
    

    
    
