Feature: Google Search

  Scenario: Search for Playwright
    Given I am on the Google search page
    When I search for "Playwright"
    Then I should see the results for "Playwright"
