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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HealthWalletDigitalWalletApi);
  }
}(this, function(expect, HealthWalletDigitalWalletApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse200', function() {
      beforeEach(function() {
        instance = new HealthWalletDigitalWalletApi.InlineResponse200();
      });

      it('should create an instance of InlineResponse200', function() {
        // TODO: update the code to test InlineResponse200
        expect(instance).to.be.a(HealthWalletDigitalWalletApi.InlineResponse200);
      });

      it('should have the property clientDescription (base name: "clientDescription")', function() {
        // TODO: update the code to test the property clientDescription
        expect(instance).to.have.property('clientDescription');
        // expect(instance.clientDescription).to.be(expectedValueLiteral);
      });

      it('should have the property file (base name: "file")', function() {
        // TODO: update the code to test the property file
        expect(instance).to.have.property('file');
        // expect(instance.file).to.be(expectedValueLiteral);
      });

      it('should have the property internalDescription (base name: "internalDescription")', function() {
        // TODO: update the code to test the property internalDescription
        expect(instance).to.have.property('internalDescription');
        // expect(instance.internalDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));