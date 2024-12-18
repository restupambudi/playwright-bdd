Feature: Login Sauce Demo

  Scenario: Valid login
    Given I am on the Sauce Demo page
    When I input username "standard_user"
    When I input password "secret_sauce"
    When I click login button
    Then I should see the result for "Products"
