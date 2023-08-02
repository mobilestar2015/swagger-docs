# HealthWalletDigitalWalletApi.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apisAdminEmployeeMemberIDGet**](DefaultApi.md#apisAdminEmployeeMemberIDGet) | **GET** /apis/admin/employee/{memberID} | Get Employee SBC Files List
[**dataEmpireEmpireIDGet**](DefaultApi.md#dataEmpireEmpireIDGet) | **GET** /data/empire/{empireID} | Fetch Empire Data
[**dataFeatureMemberIDGet**](DefaultApi.md#dataFeatureMemberIDGet) | **GET** /data/feature/{memberID} | Fetch Feature Data
[**dataHraMemberIDGet**](DefaultApi.md#dataHraMemberIDGet) | **GET** /data/hra/{memberID} | Get HRA Data

<a name="apisAdminEmployeeMemberIDGet"></a>
# **apisAdminEmployeeMemberIDGet**
> Object apisAdminEmployeeMemberIDGet(memberID)

Get Employee SBC Files List

This endpoint provides text data about the member, including the list of features they have enabled, names of SBCs, SPDs, SOBs, and other info.

### Example
```javascript
import {HealthWalletDigitalWalletApi} from 'health_wallet__digital_wallet_api';

let apiInstance = new HealthWalletDigitalWalletApi.DefaultApi();
let memberID = "memberID_example"; // String | Member ID to fetch SBC files list for

apiInstance.apisAdminEmployeeMemberIDGet(memberID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberID** | **String**| Member ID to fetch SBC files list for | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dataEmpireEmpireIDGet"></a>
# **dataEmpireEmpireIDGet**
> InlineResponse200 dataEmpireEmpireIDGet(empireID)

Fetch Empire Data

Empires are groups of people given specific features, permissions, settings, apps, etc. This endpoint provides PDFs and files about a company for extraction and addition to an index vector database for conversational AI, where HW admins know about our clients.

### Example
```javascript
import {HealthWalletDigitalWalletApi} from 'health_wallet__digital_wallet_api';

let apiInstance = new HealthWalletDigitalWalletApi.DefaultApi();
let empireID = "empireID_example"; // String | Empire ID to fetch data for

apiInstance.dataEmpireEmpireIDGet(empireID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **empireID** | **String**| Empire ID to fetch data for | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dataFeatureMemberIDGet"></a>
# **dataFeatureMemberIDGet**
> InlineResponse2001 dataFeatureMemberIDGet(memberID)

Fetch Feature Data

This endpoint provides the features a specific member has, such as telehealth, digital ID cards, etc. Used in conversational AI when the member talks to the bot and wants to know more about the features enabled on their account.

### Example
```javascript
import {HealthWalletDigitalWalletApi} from 'health_wallet__digital_wallet_api';

let apiInstance = new HealthWalletDigitalWalletApi.DefaultApi();
let memberID = "memberID_example"; // String | Member ID to fetch feature data for

apiInstance.dataFeatureMemberIDGet(memberID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberID** | **String**| Member ID to fetch feature data for | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dataHraMemberIDGet"></a>
# **dataHraMemberIDGet**
> Object dataHraMemberIDGet(memberID)

Get HRA Data

This endpoint provides HRA data about the member from their previous HRA test.

### Example
```javascript
import {HealthWalletDigitalWalletApi} from 'health_wallet__digital_wallet_api';

let apiInstance = new HealthWalletDigitalWalletApi.DefaultApi();
let memberID = "memberID_example"; // String | Member ID to fetch HRA data for

apiInstance.dataHraMemberIDGet(memberID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberID** | **String**| Member ID to fetch HRA data for | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

