import {browser, by, element} from "protractor";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

export = function myStepDefinitions () {

  this.Given(/^I am on the homepage$/, function (callback) {
    browser.get("/").then(callback());
  });


  this.Then(/^I should see welcome message$/, function (callback) {
    let el = element(by.css('app-root h1')).getText();
    return expect(el).to.eventually.equal("Welcome to app!!").then(function () {
      callback();
    }).catch(function (err) {
      callback(err);
    });
  });

};
