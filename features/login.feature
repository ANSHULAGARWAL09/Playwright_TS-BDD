Feature: Login

  @smoke
  Scenario: Successful login
    Given user is on login page
    When user logs in with valid credentials
    Then login dashboard should be visible

  @smoke
  Scenario: Successful login
    Given user is on login page
    When user logs in with valid credentials
    Then login dashboard should be visible