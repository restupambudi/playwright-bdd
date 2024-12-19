Feature: Login Sauce Demo

  Scenario: Valid login
    Given I am on the Sauce Demo page
    When I input username "standard_user"
    When I input password "secret_sauce"
    When I click login button
    Then I should see the result for "Products"

  Scenario: Invalid password
    Given I am on the Sauce Demo page
    When I input username "standard_user"
    When I input incorrect password "123"
    When I click login button
    Then I should see incorrect password message "Username and password do not match"

  Scenario: Username and password are not filled
    Given I am on the Sauce Demo page
    When I click login button
    Then The system requires me to input username "Username is required"