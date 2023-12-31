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
import {ApiClient} from '../ApiClient';

/**
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 1.0.0
 */
export class InlineResponse200 {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200();
      if (data.hasOwnProperty('clientDescription'))
        obj.clientDescription = ApiClient.convertToType(data['clientDescription'], 'String');
      if (data.hasOwnProperty('file'))
        obj.file = ApiClient.convertToType(data['file'], 'String');
      if (data.hasOwnProperty('internalDescription'))
        obj.internalDescription = ApiClient.convertToType(data['internalDescription'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} clientDescription
 */
InlineResponse200.prototype.clientDescription = undefined;

/**
 * @member {String} file
 */
InlineResponse200.prototype.file = undefined;

/**
 * @member {String} internalDescription
 */
InlineResponse200.prototype.internalDescription = undefined;

