Feature: Checkout Sauce Demo

  @checkout
  Scenario: Add to cart
    Given I have a product in my cart
    When I checkout the product
    And I input my personal information
    Then I should see "Thank you for your order!"