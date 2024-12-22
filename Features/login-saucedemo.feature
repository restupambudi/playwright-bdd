Feature: Login Sauce Demo

  @login
  Scenario: Valid login
    Given I am on the Sauce Demo page
    When I input username "standard_user"
    And I input password "secret_sauce"
    And I click login button
    Then I should see the result for "Products"
    When I click Open Menu
    And I click logout button
    Then I should see the result "Accepted usernames are"

  @login
  Scenario: Invalid password
    Given I am on the Sauce Demo page
    When I input username "standard_user"
    And I input incorrect password "123"
    And I click login button
    Then I should see incorrect password message "Username and password do not match"

  @login
  Scenario: Username and password are not filled
    Given I am on the Sauce Demo page
    When I click login button
    Then The system requires me to input username "Username is required"
