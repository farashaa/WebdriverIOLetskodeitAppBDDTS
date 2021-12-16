Feature: Automate letskodeit app

    Background: Landing page

        Given I am on the landing page of letskodeit

    Scenario: Automate every element in letskodeit app

        Then I should see the header as "Practice Page"
        When I click on radiobutton, select from drop down
        When I select from multiple select, click on checkbox
        When I click on open window
        When I must be navigated to all courses page
        Then The header of page should be "All Courses"
        When I close all courses page and navigate to practice page
        When I click on open tab
        When I should be navigated to courses page
        When I click on javascript for beginners
        Then I must see the header of course as "JavaScript for beginners"
        When I must close the window and navigate to previous window
        Then I validate the text of webtable "Selenium WebDriver With Java"
        When I enter name and click confirm
        Then The alert header contains "Are you sure"
        When I click on enable and enter text
        When I click on show and enter text
        When I hover and click on reload
        Then I see page header as "Practice Page"
        When I switch to iframe
        Then I validate the header as "All Courses"

    Scenario: signin to letskodeit app

        When I click on signin
        When I click on signup
        Then I must navigate to signup page with header "Sign Up"
        When I enter data in all feilds
        When I click on signup button
        Then I navigate to my course page with header "My Courses"
