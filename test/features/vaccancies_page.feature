@smoke
Feature: Navigating through header item

Scenario: Check page title
    Given I open "careers.epam.ua"
    Then Page title should be "EPAM Ukraine - найбільша ІТ-компанія в Україні | Вакансії і робота для розробників ПЗ"
    And I wait 5 secs

Scenario Outline: Check sections in header
    Then "<ItemName>" should be present in the header on <nth> place
    Examples:
    |ItemName|nth|
    |ВАКАНСІЇ|1|
    |НАВЧАННЯ|2|
    |БЛОГ|3|
    |ПОДІЇ|4|
    |ПРО КОМПАНІЮ|5|

Scenario: Navigate to vacancies page
    Given I open "careers.epam.ua"
    And I click on nav item with the text Вакансії
    Then I am taken to "careers.epam.ua/vacancies"
    And Page title should be "Вакансії для програмістів: Java, JavaScript, .NET, DevOps, Automated Testing, Python, BigData в EPAM Україна"