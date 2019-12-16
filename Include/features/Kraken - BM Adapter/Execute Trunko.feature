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

  Scenario Outline: Execute Success
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
      | trunko_test  | purchase     |         26 | gagal  |     110931978314 | reversal |                200 |
      | trunko_test  | inquiry      |        221 | sukses | 0051003619319900 | reversal |                200 |
      | trunko_test  | reversal     |        175 | sukses | serial           | null     |                200 |
      | trunko_test  | reversal     |         26 | gagal  | a                | reversal |                200 |

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
    And Send request
    Then User Get Http response code : <http_response_code>
    And User get rawdata in json format

    Examples: 
      | biller_label | command_type | http_response_code |
      | Reinard      | stock        |                200 |

  Scenario Outline: Convert Biller Response XML to Json Failed
    Given Biller response with wrong format XML Content-Type
    When User Input biller_label : <biller_label>
    And User Input command_type : <command_type>
    And Send request
    Then User Get Http response code : <http_response_code>
    And User get response : <message>

    Examples: 
      | biller_label | command_type | http_response_code | message                    |
      | trunko_test  | stock        |                200 | Invalid Parse XML Response |

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
