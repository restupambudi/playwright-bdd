Feature: Logout Sauce Demo

  # Background:
  #   Given I am on the dashboard page

  @logout
  Scenario: Logout
    Given I am on the dashboard page
    When I open menu bar, I click logout button
    Then I should see the result "Accepted usernames are"
