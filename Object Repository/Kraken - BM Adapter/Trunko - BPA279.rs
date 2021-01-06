<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>Trunko - BPA279</name>
   <tag></tag>
   <elementGuidId>25811ffe-b9b9-43ff-a1ef-7e2bf5b6a3ec</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;{\n\t\&quot;command_type\&quot;: \&quot;advise\&quot;, \n    \&quot;transaction_id\&quot;: 1,\n\t\&quot;transaction_biller_id\&quot;: 1,\n\t\&quot;remote_transaction_id\&quot;: \&quot;testElec\&quot;, \n\t\&quot;remote_product_id\&quot;: \&quot;asd\&quot;, \n\t\&quot;customer_id\&quot;: \&quot;085363783001\&quot;,\n\t\&quot;partner_id\&quot;: 6,\n    \&quot;product_id\&quot;: 26,\n    \&quot;biller_id\&quot;: 10,\n\t\&quot;biller_label\&quot;: \&quot;trunko_BPA279\&quot;,\n\t\&quot;counter\&quot;: 20,\n\t\&quot;rawdata\&quot;: \&quot;rawdata\&quot;,\n\t\&quot;parameters\&quot;: {\n\t\t\&quot;command_type\&quot;: \&quot;advise\&quot;, \n\t    \&quot;transaction_id\&quot;: 1,\n\t\t\&quot;transaction_biller_id\&quot;: 1,\n\t\t\&quot;remote_transaction_id\&quot;: \&quot;testElec\&quot;, \n\t\t\&quot;remote_product_id\&quot;: \&quot;asd\&quot;, \n\t\t\&quot;customer_id\&quot;: \&quot;0asd\&quot;,\n\t\t\&quot;partner_id\&quot;: 0,\n\t    \&quot;product_id\&quot;: 26,\n\t    \&quot;biller_id\&quot;: 10,\n\t\t\&quot;biller_label\&quot;: \&quot;trunko_BPA279\&quot;,\n\t\t\&quot;counter\&quot;: 20,\n\t\t\&quot;rawdata\&quot;: \&quot;rawdata\&quot;\n\t}\n}&quot;,
  &quot;contentType&quot;: &quot;text/plain&quot;,
  &quot;charset&quot;: &quot;UTF-8&quot;
}</httpBodyContent>
   <httpBodyType>text</httpBodyType>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Content-Type</name>
      <type>Main</type>
      <value>application/json</value>
   </httpHeaderProperties>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Authorization</name>
      <type>Main</type>
      <value>Basic dHJ1bmtvOjEyMzQ1Ng==</value>
   </httpHeaderProperties>
   <migratedVersion>5.4.1</migratedVersion>
   <restRequestMethod>POST</restRequestMethod>
   <restUrl>https://trunko-uat.sumpahpalapa.com/execute</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceFunction></soapServiceFunction>
   <verificationScript>import static org.assertj.core.api.Assertions.*

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webservice.verification.WSResponseManager

import groovy.json.JsonSlurper
import internal.GlobalVariable as GlobalVariable

RequestObject request = WSResponseManager.getInstance().getCurrentRequest()

ResponseObject response = WSResponseManager.getInstance().getCurrentResponse()
</verificationScript>
   <wsdlAddress></wsdlAddress>
</WebServiceRequestEntity>
