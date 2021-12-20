Feature: Automate letskodeit app

    Background: Landing page

        Given I am on the landing page of letskodeit

    Scenario: Automate header of practice page

        Then I should see the header as "Practice Page"

    Scenario: Automate Radio Button Example

        When I click on radiobutton
        Then I can see the radiobutton selected

    Scenario: Automate Select Class Example

        When I select from drop down
        Then I can see the text of dropdown as "BMW"

    Scenario: Automate Multiple Select Example

        When I select from multiple select
        Then I can see the text of multipleselect as "Peach"

    Scenario: Automate Checkbox Example

        When I click on checkbox
        Then I can see the checkbox selected

    Scenario: Automate Switch Window Example

        When I click on open window
        When I must be navigated to all courses page
        Then The header of page should be "All Courses"
        When I close all courses page and navigate to practice page

    Scenario: Automate Switch Tab Example

        When I click on open tab
        When I should be navigated to courses page
        When I click on javascript for beginners
        Then I must see the header of course as "JavaScript for beginners"
        When I must close the window and navigate to previous window

    Scenario: Automate Web Table Example

        Then I validate the text of webtable "Selenium WebDriver With Java"

    Scenario: Automate Switch To Alert Example

        When I enter name and click confirm
        Then The alert header contains "Are you sure"

    Scenario: Automate Enabled/Disabled Example

        When I click on enable and enter text

    Scenario: Automate Element Displayed Example

        When I click on show and enter text

    Scenario: Automate Mouse Hover Example

        When I hover and click on reload
        Then I see page header as "Practice Page"

    Scenario: Automate iFrame Example

        Then I validate the header of iframe as "All Courses"

    Scenario: signin to letskodeit app

        When I click on signin
        When I click on signup
        Then I must navigate to signup page with header "Sign Up"
        When I enter data in all feilds
        When I click on signup button
        Then I navigate to my course page with header "My Courses"
