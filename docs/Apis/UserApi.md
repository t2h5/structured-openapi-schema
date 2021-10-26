# UserApi

All URIs are relative to *http://localhost:0000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UserApi.md#usersGet) | **GET** /users | get user list
[**usersIdDelete**](UserApi.md#usersIdDelete) | **DELETE** /users/{user_id} | delete user
[**usersIdGet**](UserApi.md#usersIdGet) | **GET** /users/{user_id} | get user
[**usersIdPatch**](UserApi.md#usersIdPatch) | **PATCH** /users/{user_id} | update user
[**usersPost**](UserApi.md#usersPost) | **POST** /users | create new user


<a name="usersGet"></a>
# **usersGet**
> user_list usersGet(page, per\_page)

get user list

    description

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| page number | [optional] [default to null]
 **per\_page** | **Integer**| number of items per page | [optional] [default to null]

### Return type

[**user_list**](../Models/user_list.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="usersIdDelete"></a>
# **usersIdDelete**
> usersIdDelete(user\_id)

delete user

    description

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_id** | **Integer**| user id | [default to null]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="usersIdGet"></a>
# **usersIdGet**
> user usersIdGet(user\_id)

get user

    description

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_id** | **Integer**| user id | [default to null]

### Return type

[**user**](../Models/user.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="usersIdPatch"></a>
# **usersIdPatch**
> user usersIdPatch(user\_id, user\_input)

update user

    description

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_id** | **Integer**| user id | [default to null]
 **user\_input** | [**user_input**](../Models/user_input.md)| user information |

### Return type

[**user**](../Models/user.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> user usersPost(user\_input)

create new user

    description

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user\_input** | [**user_input**](../Models/user_input.md)| user information |

### Return type

[**user**](../Models/user.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

