/*global QUnit*/

sap.ui.define([
	"comtest/testapp/controller/ScheduleRule.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ScheduleRule Controller");

	QUnit.test("I should test the ScheduleRule controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
