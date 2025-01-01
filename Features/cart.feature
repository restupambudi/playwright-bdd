Feature: Cart Sauce Demo

  @cart
  Scenario: Add to cart
    Given I am on the dashboard page
    When I add a product to the cart
    Then I should see "Sauce Labs Backpack" in the cart