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
Feature: Request - Response Mapping Success

  @tag1
  Scenario Outline: Request - Response Mapping Success
    Given Mapping Config Set
    When User Input command_type : <command_type>
    And Input transaction_id : <transaction_id>
    And Input transaction_biller_id : <transaction_biller_id>
    And Input customer_id : <customer_id>
    And Input partner_id : <partner_id>
    And Input product_id : <product_id>
    And Input biller_id : <biller_id>
    And Input biller_label : <biller_label>
    And Input rawdata : <rawdata>
    And Send request
    Then Get transaction_id : <transaction_id>
    And transaction_biller_id : <transaction_biller_id>
    And remote_transaction_id : <remote_transaction_id>
    And remote_product_id : <remote_product_id>
    And customer_id : <customer_id>
    And response_code : <response_code>
    And price : <price>
    And amount : <amount>
    And serial_number : <serial_number>
    And biller_rescode : <biller_rescode>
    And message : <message>
    And rawdata : <rawdata>
    
    Examples:
    |command_type    |transaction_id    |transaction_biller_id    |remote_transaction_id    |remote_product_id    |customer_id    |response_code|price|amount|serial_number    |biller_rescode|partner_id    |product_id    |biller_id    |biller_label    |rawdata    |message|
    |purchase        |6855945           |1                        |110931978314             |PKREG60WS            |085363783000   |00           |4900 |50000  |0051003619319900|0000          |6             |1           |1            |trunko_test     |{"customer_number":"085363783000","data":{"biller_message":"Pengisian Voucher sebesar 25000 ke nomor 085363783000 pada tanggal 18/07/2019 09:54:44 telah berhasil dengan no ref \u003c0051003619319900\u003e","rc_biller":"0000","remote_transaction_id":"110931978314","serial_number":"0051003619319900"},"status":"sukses","transaction_id":6855945}|Pengisian Voucher sebesar 25000 ke nomor 085363783000 pada tanggal 18/07/2019 09:54:44 telah berhasil dengan no ref <0051003619319900>|
 