<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>Trunko Callback Payload POST - urlencoded</name>
   <tag></tag>
   <elementGuidId>a7592005-04e4-4ca1-a60a-9a84bddb539b</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;contentType&quot;: &quot;application/x-www-form-urlencoded&quot;,
  &quot;charset&quot;: &quot;UTF-8&quot;,
  &quot;parameters&quot;: [
    {
      &quot;name&quot;: &quot;data[serial_number]&quot;,
      &quot;value&quot;: &quot;1&quot;
    },
    {
      &quot;name&quot;: &quot;data[rc_biller]&quot;,
      &quot;value&quot;: &quot;2&quot;
    },
    {
      &quot;name&quot;: &quot;data[biller_message]&quot;,
      &quot;value&quot;: &quot;3&quot;
    },
    {
      &quot;name&quot;: &quot;data[remote_transaction_id]&quot;,
      &quot;value&quot;: &quot;4&quot;
    }
  ]
}</httpBodyContent>
   <httpBodyType>x-www-form-urlencoded</httpBodyType>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Content-Type</name>
      <type>Main</type>
      <value>application/x-www-form-urlencoded</value>
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
