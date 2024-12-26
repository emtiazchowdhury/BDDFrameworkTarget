@smokeTest
Feature: Target Homepage Page

  Scenario: User should be able to verify pagetitle
    Given User navigates to Target Home page
    When User capture the pagetitle
    Then User should be able to verify the correct pagetitle
    Then User should be able to close the browser

  Scenario: User should be able to search items
    Given User navigates to Target Home page
    When User enter "coffe" and click search button
    Then User should be able to see a list of items
    Then User should be able to close the browser