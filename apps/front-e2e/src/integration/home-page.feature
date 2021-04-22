Feature: Home page

  Scenario: The application displays the welcome message.
    Given the home page is public
    Then the "Welcome to FizzBuzz!" message is displayed

  Scenario: The application displays the fizzbuzz section.
    Given the fizzbuzz test will be executed automatically
    Then the "FizzBuzz Test" section is displayed

  Scenario: The application displays the 6 fizzbuzz item.
    Given the fizzbuzz test is from 1 to 100
    Then the "fizzbuzz" items displayed are 6
