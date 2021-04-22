import { Before, Given, Then } from "cypress-cucumber-preprocessor/steps"
import { getApp, getAppTitle, getItems, getSectionTitle } from '../support/app.po';

Before(() => {
  getApp()
})
// Verify the app title
Given("the home page is public", () => {
  console.log("the home was loaded")
})
Then("the {string} message is displayed", (message: string) => {
  getAppTitle().contains(message)
})
// Verify the section title
Given("the fizzbuzz test will be executed automatically", () => {
  console.log("the fizzbuzz test was executed")
})
Then("the {string} section is displayed", (message: string) => {
  getSectionTitle().contains(message)
})
// Verify fizzbuzz items are 6
Given("the fizzbuzz test is from 1 to 100", () => {
  console.log("the fizzbuzz result was showed")
})
Then("the {string} items displayed are {int}",
  (type: string, number: number) => {
  getItems("p." + type).its('length').should('eq', number)
})
