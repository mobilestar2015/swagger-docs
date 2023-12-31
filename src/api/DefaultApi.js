/*
 * Health Wallet & Digital Wallet API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {InlineResponse200} from '../model/InlineResponse200';
import {InlineResponse2001} from '../model/InlineResponse2001';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apisAdminEmployeeMemberIDGet operation.
     * @callback moduleapi/DefaultApi~apisAdminEmployeeMemberIDGetCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Employee SBC Files List
     * This endpoint provides text data about the member, including the list of features they have enabled, names of SBCs, SPDs, SOBs, and other info.
     * @param {String} memberID Member ID to fetch SBC files list for
     * @param {module:api/DefaultApi~apisAdminEmployeeMemberIDGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apisAdminEmployeeMemberIDGet(memberID, callback) {
      
      let postBody = null;
      // verify the required parameter 'memberID' is set
      if (memberID === undefined || memberID === null) {
        throw new Error("Missing the required parameter 'memberID' when calling apisAdminEmployeeMemberIDGet");
      }

      let pathParams = {
        'memberID': memberID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/apis/admin/employee/{memberID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dataEmpireEmpireIDGet operation.
     * @callback moduleapi/DefaultApi~dataEmpireEmpireIDGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch Empire Data
     * Empires are groups of people given specific features, permissions, settings, apps, etc. This endpoint provides PDFs and files about a company for extraction and addition to an index vector database for conversational AI, where HW admins know about our clients.
     * @param {String} empireID Empire ID to fetch data for
     * @param {module:api/DefaultApi~dataEmpireEmpireIDGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    dataEmpireEmpireIDGet(empireID, callback) {
      
      let postBody = null;
      // verify the required parameter 'empireID' is set
      if (empireID === undefined || empireID === null) {
        throw new Error("Missing the required parameter 'empireID' when calling dataEmpireEmpireIDGet");
      }

      let pathParams = {
        'empireID': empireID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/data/empire/{empireID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dataFeatureMemberIDGet operation.
     * @callback moduleapi/DefaultApi~dataFeatureMemberIDGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch Feature Data
     * This endpoint provides the features a specific member has, such as telehealth, digital ID cards, etc. Used in conversational AI when the member talks to the bot and wants to know more about the features enabled on their account.
     * @param {String} memberID Member ID to fetch feature data for
     * @param {module:api/DefaultApi~dataFeatureMemberIDGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    dataFeatureMemberIDGet(memberID, callback) {
      
      let postBody = null;
      // verify the required parameter 'memberID' is set
      if (memberID === undefined || memberID === null) {
        throw new Error("Missing the required parameter 'memberID' when calling dataFeatureMemberIDGet");
      }

      let pathParams = {
        'memberID': memberID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/data/feature/{memberID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the dataHraMemberIDGet operation.
     * @callback moduleapi/DefaultApi~dataHraMemberIDGetCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get HRA Data
     * This endpoint provides HRA data about the member from their previous HRA test.
     * @param {String} memberID Member ID to fetch HRA data for
     * @param {module:api/DefaultApi~dataHraMemberIDGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    dataHraMemberIDGet(memberID, callback) {
      
      let postBody = null;
      // verify the required parameter 'memberID' is set
      if (memberID === undefined || memberID === null) {
        throw new Error("Missing the required parameter 'memberID' when calling dataHraMemberIDGet");
      }

      let pathParams = {
        'memberID': memberID
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/data/hra/{memberID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}