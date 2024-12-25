Feature: Login Sauce Demo

  @login
  Scenario: Valid login
    Given I am on the Sauce Demo page
    When I input username "standard_user" and password "secret_sauce"
    And I click login button
    Then I should see the result for "Products"

  @login
  Scenario: Invalid password
    Given I am on the Sauce Demo page
    When I input valid username "standard_user" and invalid password "123"
    And I click login button
    Then I should see incorrect password message "Username and password do not match"

  @login
  Scenario: Username and password are not filled
    Given I am on the Sauce Demo page
    When I click login button
    Then The system requires me to input username "Username is required"
