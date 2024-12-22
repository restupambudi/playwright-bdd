Feature: Logout Sauce Demo

  @logout
  Scenario: Logout
    Given I am on the Sauce Demo page
    When I input username "standard_user"
    And I input password "secret_sauce"
    And I click login button
    Then I should see the result for "Products"
    When I go to Open Menu
    And I click logout button
    Then I should see the result "Accepted usernames are"