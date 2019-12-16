<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>Trunko Callback Payload POST - xml</name>
   <tag></tag>
   <elementGuidId>a972b074-6a57-4d15-9c7b-a01662e105be</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;\u003cdata\u003e\n      \u003cbiller_message\u003ebiller message\u003c/biller_message\u003e\n      \u003crc_biller\u003e10\u003c/rc_biller\u003e\n      \u003cremote_transaction_id\u003e123456789\u003c/remote_transaction_id\u003e\n      \u003cserial_number\u003eserial_number\u003c/serial_number\u003e\n   \u003c/data\u003e&quot;,
  &quot;contentType&quot;: &quot;application/xml&quot;,
  &quot;charset&quot;: &quot;UTF-8&quot;
}</httpBodyContent>
   <httpBodyType>text</httpBodyType>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Content-Type</name>
      <type>Main</type>
      <value>application/xml</value>
   </httpHeaderProperties>
   <migratedVersion>5.4.1</migratedVersion>
   <restRequestMethod>POST</restRequestMethod>
   <restUrl>https://trunko-uat.sumpahpalapa.com/callback/${BILLER}</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceFunction></soapServiceFunction>
   <variables>
      <defaultValue>GlobalVariable.BILLER_LABEL</defaultValue>
      <description></description>
      <id>12197f0e-5142-438a-888b-f66f02923eb9</id>
      <masked>false</masked>
      <name>BILLER</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.PAYLOAD</defaultValue>
      <description></description>
      <id>c888b270-e6fb-44a8-ab1f-33aa7db0b4f3</id>
      <masked>false</masked>
      <name>PAYLOAD</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.CONTENT_TYPE</defaultValue>
      <description></description>
      <id>9850f231-3f7e-4fd3-a464-8b336e4a22d4</id>
      <masked>false</masked>
      <name>CONTENT_TYPE</name>
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
