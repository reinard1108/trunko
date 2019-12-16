<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>Simulate Biller Rules Mapping</name>
   <tag></tag>
   <elementGuidId>7e9d1ce0-6787-444f-8cb1-80a638c9df80</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;{\n  \&quot;content_type\&quot;: \&quot;${CONTENT_TYPE}\&quot;,\n  \&quot;mapping\&quot;: \&quot;${MAPPING}\&quot;,\n  \&quot;rules\&quot;: \&quot;${RULES}\&quot;,\n  \&quot;response_code_mapping\&quot;:\&quot;${RESPONSE_CODE_MAPPING}\&quot;,\n  \&quot;content\&quot;: \&quot;${CONTENT}\&quot;\n}&quot;,
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
      <value>text/html</value>
   </httpHeaderProperties>
   <migratedVersion>5.4.1</migratedVersion>
   <restRequestMethod>POST</restRequestMethod>
   <restUrl>${URL}</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceFunction></soapServiceFunction>
   <variables>
      <defaultValue>GlobalVariable.URL</defaultValue>
      <description></description>
      <id>a6e4884a-da05-47e6-993e-fe051967d0a3</id>
      <masked>false</masked>
      <name>URL</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.TOKEN</defaultValue>
      <description></description>
      <id>7d3a16ed-43ba-4394-abdf-d61a3a03eb4c</id>
      <masked>false</masked>
      <name>TOKEN</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.CONTENT_TYPE</defaultValue>
      <description></description>
      <id>ea41749e-1d54-43e7-9142-794ce28b52a6</id>
      <masked>false</masked>
      <name>CONTENT_TYPE</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.MAPPING</defaultValue>
      <description></description>
      <id>2dbcb050-e610-43e5-9aec-0868ca603748</id>
      <masked>false</masked>
      <name>MAPPING</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.RULES</defaultValue>
      <description></description>
      <id>4c2d36aa-5d74-4fe2-996a-09ffe5d77d1b</id>
      <masked>false</masked>
      <name>RULES</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.RESPONSE_CODE_MAPPING</defaultValue>
      <description></description>
      <id>233cdfb1-66d1-421e-8c97-7b1ceda3d7d5</id>
      <masked>false</masked>
      <name>RESPONSE_CODE_MAPPING</name>
   </variables>
   <variables>
      <defaultValue>GlobalVariable.CONTENT</defaultValue>
      <description></description>
      <id>01e2dcf5-f9d2-4ac4-ac47-ba0f6fcd6b00</id>
      <masked>false</masked>
      <name>CONTENT</name>
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
