<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>Trunko UAT - Copy (1)</name>
   <tag></tag>
   <elementGuidId>ea316e4d-b1b3-4a80-be26-e5783a4e416d</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;{\n\t\&quot;command_type\&quot;: \&quot;purchase\&quot;, \n    \&quot;transaction_id\&quot;: 1,\n\t\&quot;transaction_biller_id\&quot;: 1,\n\t\&quot;remote_transaction_id\&quot;: \&quot;110931978314\&quot;, \n\t\&quot;remote_product_id\&quot;: \&quot;asd\&quot;, \n\t\&quot;customer_id\&quot;: \&quot;085363783001\&quot;,\n\t\&quot;partner_id\&quot;: 6,\n    \&quot;product_id\&quot;: 175,\n    \&quot;biller_id\&quot;: 1,\n\t\&quot;biller_label\&quot;: \&quot;trunko_BPA262\&quot;,\n\t\&quot;counter\&quot;: 20,\n\t\&quot;rawdata\&quot;: \&quot;hi\&quot;,\n\t\&quot;parameters\&quot;: \&quot;param\&quot;\n}&quot;,
  &quot;contentType&quot;: &quot;application/json&quot;,
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
   <variables>
      <defaultValue>GlobalVariable.COMMAND_TYPE</defaultValue>
      <description></description>
      <id>effa2dee-6b03-44c2-a25c-514b28b70a47</id>
      <masked>false</masked>
      <name>COMMAND_TYPE</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.TRANSACTION_ID</defaultValue>
      <description></description>
      <id>d0166b9a-4de4-48ff-82f1-ea50ecc0597b</id>
      <masked>false</masked>
      <name>TRANSACTION_ID</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.CUSTOMER_ID</defaultValue>
      <description></description>
      <id>6abadefe-fae6-4fce-9eb5-525c5cd5d384</id>
      <masked>false</masked>
      <name>CUSTOMER_ID</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.BILLER_LABEL</defaultValue>
      <description></description>
      <id>46ace19e-b102-4575-b7c5-8863738c8907</id>
      <masked>false</masked>
      <name>BILLER_LABEL</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.PRODUCT_ID</defaultValue>
      <description></description>
      <id>13250467-324b-442a-99fc-4fee22c06590</id>
      <masked>false</masked>
      <name>PRODUCT_ID</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.PARTNER_ID</defaultValue>
      <description></description>
      <id>587a9d7c-99d1-4955-85e6-9ea08553dbb9</id>
      <masked>false</masked>
      <name>PARTNER_ID</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.BILLER_ID</defaultValue>
      <description></description>
      <id>10727ba5-0ead-494d-8185-bc37a218b2fb</id>
      <masked>false</masked>
      <name>BILLER_ID</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.TRANSACTION_BILLER_ID</defaultValue>
      <description></description>
      <id>d005a410-49ea-4426-9be6-3c49236539b3</id>
      <masked>false</masked>
      <name>TRANSACTION_BILLER_ID</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.REMOTE_PRODUCT_ID</defaultValue>
      <description></description>
      <id>54840ce8-d4a6-4e53-93bf-ed6cc5c5030d</id>
      <masked>false</masked>
      <name>REMOTE_PRODUCT_ID</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.RAWDATA</defaultValue>
      <description></description>
      <id>2ea091b7-d542-4b9a-84b4-e9389a5f8cb2</id>
      <masked>false</masked>
      <name>RAWDATA</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.PARAMETERS</defaultValue>
      <description></description>
      <id>0aef6cc6-23b5-45f3-b8e0-b054670609ef</id>
      <masked>false</masked>
      <name>PARAMETERS</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.REMOTE_TRANSACTION_ID</defaultValue>
      <description></description>
      <id>bd53acfb-c676-4c1a-b233-04e2d1322e8f</id>
      <masked>false</masked>
      <name>REMOTE_TRANSACTION_ID</name>
   </variables>
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
