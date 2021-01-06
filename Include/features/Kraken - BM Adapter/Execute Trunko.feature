#Author: reinard@alterra.id
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
      | biller_label | http_response_code | message                 |
      | tidak ada    |                501 | Biller config not found |
      | TestBiller   |                501 | Biller config not found |

  Scenario Outline: Product Mapping Not Found
    Given Product Mapping : <product_id> Config Not Set
    When User Input biller_label : <biller_label>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | biller_label | product_id | http_response_code | message                   |
      | trunko_test  |          2 |                501 | Product mapping not found |
      | trunko_test  |     300000 |                501 | Product mapping not found |

  Scenario Outline: Command Type Config Not Found
    Given Command Type : <command_type> Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | command_type | product_id | biller_label | http_response_code | message                       |
      | test         |        175 | trunko_test  |                501 | Command type config not found |

  Scenario Outline: Product Type Config Not Found
    Given Product Type Not Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | command_type | product_id | biller_label | http_response_code | message                       |
      | purchase     |        175 | trunko_test  |                501 | Product type config not found |
      | purchase     |        221 | trunko_test  |                501 | Product type config not found |

  Scenario Outline: new error 501: Pending, waiting Biller's callback
    Given Product Type Not Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | command_type | product_id | biller_label     | http_response_code | message                            |
      | advice       |        175 | trunko_171227693 |                501 | Pending, waiting Biller's callback |

  Scenario Outline: Execute Success
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Input remote_transaction_id :<remote_transaction_id>
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
    And detail : <detail>

    Examples: 
      | command_type | product_id | biller_label | http_response_code | response_code | transaction_id | transaction_biller_id | customer_id  | partner_id | rawdata | remote_transaction_id | remote_product_id | serial_number    | biller_rescode | message          | detail                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
      | advise       |        175 | trunko_test  |                200 |            00 |              1 |                     1 | 085363783001 |          6 | rawdata | a                     | PKREG60WS         | a                |           0000 | advise message   | null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | reversal     |        175 | trunko_test  |                200 |            20 |              2 |                     2 | 085363783002 |          6 | rawdata | abc                   | PKREG60WS         | serial           |           9006 | reversal message | null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | inquiry      |        221 | trunko_test  |                200 |            22 |              3 |                     3 | 085363783003 |          6 | rawdata |          110931978314 | testPdam          | 0051003619319900 |           9012 | inquiry message  | {acquiring_institution_id=008,admin_charge=0,amount=184000,bill_count=2,bill_repeat_count=2,bills=[{bill_amount=[74000],bill_date=[201709],kubikasi=[527-541],penalty=[0]},{bill_amount=[100000],bill_date=[201708],kubikasi=[527-541],penalty=[10000]}],blth=201708201709,idpel=1998800007,local_trx_date=20171020,local_trx_time=062418,merchant_code=6012,mti=0210,name=SEPULSA2,pan=074003,processing_code=380000,rc=00,retrieval_ref_no=000135739333,rp_tag=184000,settlement_date=20171021,stan=000135739333,transmission_datetime=1020062418} |

  Scenario Outline: Response Rules Success
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    When User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    And User Get FBS response status : <status>
    And User Get FBS response data.serial_number : <serial_number>
    Then User Get Http response code : <http_response_code>
    And User get next command : <next>

    Examples: 
      | biller_label | command_type | product_id | status | serial_number    | next     | http_response_code |
      | trunko_test  | advise       |        175 | sukses | a                | advice   |                200 |
      | trunko_test  | purchase     |         26 | gagal  |     110931978314 | salrever |                200 |
      | trunko_test  | inquiry      |        221 | sukses | 0051003619319900 | salrever |                200 |
      | trunko_test  | reversal     |        175 | sukses | serial           | null     |                200 |
      | trunko_test  | reversal     |         26 | gagal  | a                | salrever |                200 |

  Scenario Outline: Response Rules Failed
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    When User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | biller_label | command_type | product_id | http_response_code | message                  |
      | Reinard      | advise       |         26 |                200 | Invalid response mapping |

  Scenario Outline: Convert Biller Response XML to Json Success
    Given Biller response with XML Content-Type
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And User get rawdata in json format

    Examples: 
      | biller_label | command_type | product_id | http_response_code |
      | Reinard      | stock        |         26 |                200 |

  Scenario Outline: Convert Biller Response XML to Json Failed
    Given Biller response with wrong format XML Content-Type
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And User get response : <message>

    Examples: 
      | biller_label | command_type | product_id | http_response_code | message                    |
      | trunko_test  | stock        |         26 |                200 | Invalid Parse XML Response |

  Scenario Outline: Function for operation Success
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And remote_transaction_id : <remote_transaction_id>
    And customer_id : <customer_id>
    And price : <price>
    And amount : <amount>
    And User get next command : <next>

    Examples: 
      | biller_label | command_type | product_id | http_response_code | remote_transaction_id | customer_id  | price | amount | next       |
      | Reinard      | purchase     |        221 |                200 | lower                 | replbce      |    10 |  12000 | UPPER      |
      | Reinard      | purchase     |        175 |                200 | apel                  | concat value |    51 |      2 | sukses gag |

  Scenario Outline: Request Rules Success
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And User get next command : <next>

    Examples: 
      | biller_label | command_type | product_id | transaction_id | http_response_code | next                  |
      | Reinard      | reversal     |         26 |              1 |                200 | success request rules |
      | Reinard      | reversal     |         26 |              2 |                200 | failed request rules  |
      | stock_test   | stock        |         26 |              1 |                200 | success request rules |
      | stock_test   | stock        |         26 |              2 |                200 | failed request rules  |

  Scenario Outline: Request Rules Success
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input customer_id : <customer_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And User get next command : <next>

    Examples: 
      | biller_label     | command_type | product_id | customer_id | http_response_code | next               |
      | trunko_171460577 | reversal     |         26 |  6281282563 |                200 | success start_with |
      | trunko_171460577 | reversal     |         26 |  1282563755 |                200 | success end_with   |

  Scenario Outline: Request Rules Failed
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | biller_label | command_type | product_id | http_response_code | message                 |
      | Reinard      | advise       |        175 |                200 | Invalid request mapping |

  Scenario Outline: Request using content-type application/x-www-form-urlencoded
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>

    Examples: 
      | biller_label      | command_type | product_id | http_response_code |
      | trunko_urlencoded | advise       |         26 |                200 |
      | trunko_urlencoded | advise       |        175 |                200 |

  Scenario Outline: Mapping Config not found
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | biller_label          | command_type | product_id | http_response_code | message                  | description              |
      | trunko_mapping_config | inquiry      |        221 |                200 | Mapping config not found | no rules config          |
      | trunko_mapping_config | advise       |         26 |                200 | Mapping config not found | no response rules config |
      | trunko_mapping_config | advise       |        175 |                200 | Mapping config not found | no request rules config  |

  Scenario Outline: Run all rules condition
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And User get next command : <next>

    Examples: 
      | biller_label | command_type | product_id | transaction_id | http_response_code | next          |
      | Reinard      | purchase     |         26 |              1 |                200 | success bosku |

  Scenario Outline: Request rules applied for new key "parameters"
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Input parameters : <parameters>
    And Send request
    Then User Get Http response code : <http_response_code>
    And User get next command : <next>

    Examples: 
      | biller_label     | command_type | product_id | parameters | http_response_code | next                  |
      | trunko_170842794 | inquiry      |         26 |          1 |                200 | success request rules |
      | trunko_170842794 | inquiry      |         26 |          2 |                200 | failed request rules  |
      | trunko_170842794 | purchase     |         26 |          1 |                200 | success request rules |
      | trunko_170842794 | purchase     |         26 |          2 |                200 | failed request rules  |
      | trunko_170842794 | advice       |         26 |          1 |                200 | success request rules |
      | trunko_170842794 | advice       |         26 |          2 |                200 | failed request rules  |
      | trunko_170842794 | reversal     |         26 |          1 |                200 | success request rules |
      | trunko_170842794 | reversal     |         26 |          2 |                200 | failed request rules  |
      | trunko_170842794 | stock        |         26 |          1 |                200 | success request rules |
      | trunko_170842794 | stock        |         26 |          2 |                200 | failed request rules  |

  Scenario Outline: Access kraken request payload in response mapping (Operation)
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Input remote_transaction_id : <remote_transaction_id>
    And Input transaction_biller_id : <transaction_biller_id>
    And Input remote_product_id : <remote_product_id>
    And Input customer_id : <customer_id>
    And Input partner_id : <partner_id>
    And Input rawdata : <rawdata>
    And Send request
    Then User Get Http response code : <http_response_code>
    And Get transaction_id : <transaction_id>
    And transaction_biller_id : <transaction_biller_id>
    And remote_transaction_id : <remote_product_id>
    And remote_product_id : <remote_product_id>
    And customer_id : <transaction_biller_id>
    And serial_number : <partner_id>
    And biller_rescode : <command_type>
    And message : <customer_id>
    And detail : <remote_transaction_id>
    And User get next command : <transaction_id>

    Examples: 
      | command_type | product_id | biller_label  | http_response_code | transaction_id | transaction_biller_id | customer_id  | partner_id | rawdata | remote_transaction_id | remote_product_id | serial_number | message        | detail |
      | advise       |        175 | trunko_BPA262 |                200 |              1 |                     1 | 085363783001 |          6 | rawdata | a                     | PKREG60WS         | a             | advise message | null   |

  Scenario Outline: Access kraken request payload in response mapping (Operation)
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Input transaction_biller_id : <transaction_biller_id>
    And Input remote_transaction_id : <remote_transaction_id>
    And Input remote_product_id : <remote_product_id>
    And Input customer_id : <customer_id>
    And Input partner_id : <partner_id>
    And Input rawdata : <rawdata>
    And Input biller_id : <biller_id>
    And Input parameters : <parameters>
    And Send request
    Then User Get Http response code : <http_response_code>
    And Get transaction_id : <transaction_id>
    And transaction_biller_id : <transaction_biller_id>
    And remote_transaction_id : <parameters>
    And remote_product_id : <remote_product_id>
    And customer_id : <rawdata>
    And serial_number : <biller_label>
    And biller_rescode : <product_id>
    And message : <biller_id>
    And User get next command : 20

    Examples: 
      | command_type | product_id | biller_label  | biller_id | http_response_code | transaction_id | transaction_biller_id | remote_transaction_id | customer_id  | partner_id | rawdata | parameters | remote_product_id | serial_number | message        |  |
      | purchase     |         26 | trunko_BPA262 |         3 |                200 |              1 |                     1 | genfm                 | 085363783001 |          6 | rawdata | parambos   | testElec          | a             | advise message |  |

  Scenario Outline: Access kraken request payload in response mapping (Condition)
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Input transaction_biller_id : <transaction_biller_id>
    And Input remote_transaction_id : <remote_transaction_id>
    And Input remote_product_id : <remote_product_id>
    And Input customer_id : <customer_id>
    And Input partner_id : <partner_id>
    And Input rawdata : <rawdata>
    And Input biller_id : <biller_id>
    And Input parameters : <parameters>
    And Send request for this scenario only
    Then User Get Http response code : <http_response_code>
    And biller_rescode : <command_type>

    Examples: 
      | biller_label  | command_type | transaction_id | transaction_biller_id | remote_transaction_id | remote_product_id | customer_id  | partner_id | product_id | biller_id | counter | rawdata | parameters | http_response_code |
      | trunko_BPA262 | advise       |              1 |                     1 |          110931978314 | asd               | 085363783001 |          6 |         26 |         1 |      20 | hi      | param      |                200 |

  Scenario Outline: Access kraken request payload in response mapping - Mapping still occured eventhough biller response is 404
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Input transaction_biller_id : <transaction_biller_id>
    And Input remote_transaction_id : <remote_tr	ansaction_id>
    And Input remote_product_id : <remote_product_id>
    And Input customer_id : <customer_id>
    And Input partner_id : <partner_id>
    And Input rawdata : <rawdata>
    And Input biller_id : <biller_id>
    And Input parameters : <parameters>
    And Send request for this scenario only
    Then User Get Http response code : <http_response_code>
    And biller_rescode : <command_type>

    Examples: 
      | biller_label  | command_type | transaction_id | transaction_biller_id | remote_transaction_id | remote_product_id | customer_id  | partner_id | product_id | biller_id | counter | rawdata | parameters | http_response_code |
      | trunko_BPA262 | purchase     |              1 |                     1 |          110931978314 | asd               | 085363783001 |          6 |        175 |         1 |      20 | hi      | param      |                200 |

  Scenario Outline: Access kraken request payload in response mapping - Mapping still occured eventhough biller timeout
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Input transaction_biller_id : <transaction_biller_id>
    And Input remote_transaction_id : <remote_transaction_id>
    And Input remote_product_id : <remote_product_id>
    And Input customer_id : <customer_id>
    And Input partner_id : <partner_id>
    And Input rawdata : <rawdata>
    And Input biller_id : <biller_id>
    And Input parameters : <parameters>
    And Send request for this scenario only
    Then User Get Http response code : <http_response_code>
    And message : <message>
    And biller_rescode : <command_type>

    Examples: 
      | biller_label  | command_type | transaction_id | transaction_biller_id | remote_transaction_id | remote_product_id | customer_id  | partner_id | product_id | biller_id | counter | rawdata | parameters | message | http_response_code |
      | trunko_BPA262 | reversal     |              1 |                     1 |          110931978314 | asd               | 085363783001 |          6 |        175 |         1 |      20 | hi      | param      | Timeout |                200 |

  Scenario Outline: Kraken halt process
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | message             |
      | trunko_BPA278 | advise       |         26 |                501 | kraken-halt-process |

  Scenario Outline: Condition support function
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request for BPA279
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | message      |
      | trunko_BPA279 | advise       |         26 |                200 | berhasil cuk |

  Scenario Outline: Improve rules condition from skip to false
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Send request
    Then User Get Http response code : <http_response_code>

    Examples: 
      | biller_label  | command_type | product_id | transaction_id | http_response_code | message                  |
      | trunko_BPA360 | advice       |         26 |             20 |                200 | condition false berhasil |

  Scenario Outline: Rules: new func and new operator
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Input transaction_id : <transaction_id>
    And Input customer_id : <customer_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>
    And biller_rescode : <biller_rescode>

    Examples: 
      | biller_label | command_type | product_id | transaction_id | customer_id  | http_response_code | message                          | biller_rescode                                                   |
      | trunko_BPA65 | advice       |         26 |              1 | 085363783001 |                200 | 42810cb02db3bb2cbb428af0d8b0376e | 739b9d664d77db3ee3cab40737c6386fb7b6ef9e00b31a434fd7680e69482ba0 |

  Scenario Outline: Rules: New func generate random number
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Input customer_id : <customer_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And User get message in 16 digit random number

    Examples: 
      | biller_label  | command_type | product_id | customer_id  | http_response_code |
      | trunko_BPA446 | advice       |         26 | 085363783001 |                200 |

  @TestCaseKey=BPA-T925
  Scenario Outline: Rules: transaction_biller_id can be mapped
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Input transaction_biller_id : <transaction_biller_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And transaction_biller_id : <transaction_biller_id>

    Examples: 
      | biller_label  | command_type | product_id | transaction_biller_id | http_response_code |
      | trunko_BPA498 | purchase     |         26 |                     1 |                200 |
      | trunko_BPA498 | purchase     |         26 |                     2 |                200 |

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
      | trunko_BPA451 | purchase     |         26 |          1 | {\\"customer_id\\":\\"customer\\"} |                200 | customer       | dsa     | 30010 |
      | trunko_BPA451 | purchase     |        175 |          1 | {\\"customer_id\\":\\"customer\\"} |                200 | customer       | dsa     |  5900 |

  @TestCaseKey=BPA-T1067
  Scenario Outline: Rules Mapping: Convert float64 to int when using formula
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And serial_number : <serial_number>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | serial_number |
      | trunko_BPA541 | advice       |         26 |                200 |       2958734 |

  @TestCaseKey=BPA-T1273
  Scenario Outline: trim product id field
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | message   |
      | trunko_BPA552 | advice       |         26 |                200 | test Elec |

  @TestCaseKey=BPA-T1442
  Scenario Outline: binding product nominal and product price
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>
    And serial_number : <serial_number>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | message | serial_number |
      | trunko_BPA644 | advice       |         26 |                200 |   50000 |         50000 |

  @TestCaseKey=BPA-T1443
  Scenario Outline: convert response biller text/html to json
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And message : <message>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | message  |
      | trunko_BPA645 | advice       |         26 |                200 | html nih |

  @TestCaseKey=BPA-T1748
  Scenario: Fixed basic auth checking
    Given Biller Config Set
    When User send request with wrong auth
    Then User Get Http response code : 401

  @TestCaseKey=BPA-T2332
  Scenario Outline: Execute next command workflow
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And biller_rescode : <biller_rescode>
    And response_code : <response_code>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | biller_rescode | response_code |
      | trunko_BPA769 | purchase     |         26 |                200 |           0000 |            00 |

  @TestCaseKey=BPA-T2373
  Scenario Outline: Execution time > execution_time.end
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And response_code : <response_code>
    And message : <message>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | message                                              | response_code |
      | trunko_BPA768 | purchase     |         26 |                200 | Added to queue for time more than execution end time |            10 |

  @TestCaseKey=BPA-T2374
  Scenario Outline: next_interval > 3
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And response_code : <response_code>
    And message : <message>
    And User get next command : <next>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | message                                        | response_code | next   |
      | trunko_BPA768 | purchase     |        175 |                200 | Added to queue for interval more than 3 second |            10 | advice |
      | trunko_BPA768 | reversal     |        175 |                200 | Added to queue for interval more than 3 second |            10 | advice |

  @TestCaseKey=BPA-T2375
  Scenario Outline: negative case : parse start,end time execution
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And response_code : <response_code>
    And message : <message>

    Examples: 
      | biller_label  | command_type | product_id | http_response_code | message                                   | response_code |
      | trunko_BPA768 | reversal     |        221 |                501 | Can not Parse Execution End Time Config   |            10 |
      | trunko_BPA768 | reversal     |         26 |                501 | Can not Parse Execution Start Time Config |            10 |

  @TestCaseKey=BPA-T2608
  Scenario Outline: negative case : parse start,end time execution
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Input product_id : <product_id>
    And Input biller_id : <biller_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And price : <price>

    Examples: 
      | biller_label  | biller_id | command_type | product_id | http_response_code | price |
      | trunko_BPA941 |       203 | advice       |        221 |                200 | 11600 |
      | trunko_BPA941 |       203 | advice       |         26 |                200 | 50200 |
      | trunko_BPA941 |       203 | advice       |        175 |                200 |   300 |
      | trunko_BPA941 |       203 | advice       |          2 |                200 |  4000 |

  @TestCaseKey=BPA-T2932
  Scenario Outline: Ability to get deposit value from biller
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And User Get stock info

    Examples: 
      | biller_label   | command_type | product_id | http_response_code |
      | trunko_BPA1016 | stock        |          0 |                200 |

  @TestCaseKey=BPA-T2933
  Scenario Outline: access amount parameter
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And amount : <amount>

    Examples: 
      | biller_label   | command_type | product_id | http_response_code | amount |
      | trunko_BPA1054 | purchase     |        175 |                200 |   1000 |

  @TestCaseKey=BPA-T2982
  Scenario Outline: access amount parameter
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And amount : <amount>

    Examples: 
      | biller_label   | command_type | product_id | http_response_code | amount |
      | trunko_BPA1104 | purchase     |        175 |                200 |   1000 |

  @TestCaseKey=BPA-T3108
  Scenario Outline: BM - Implementation New Token Function ( HS256 , sed )
    Given Biller Config Set
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And User Input product_id : <product_id>
    And Send request
    Then User Get Http response code : <http_response_code>
    And biller_rescode : <biller_rescode>
    And serial_number : <serial_number>

    Examples: 
      | biller_label   | command_type | product_id | http_response_code | biller_rescode                               | serial_number |
      | trunko_BPA1219 | purchase     |         26 |                200 | UDvl1ogQzlAWccoevtU6D8UNJCo2jHwPfwoY4G1Ixhg= | cobased+      |
