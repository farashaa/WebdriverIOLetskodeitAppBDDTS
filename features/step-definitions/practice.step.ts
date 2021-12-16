import { Given, When, Then } from '@wdio/cucumber-framework';
import faker from "faker"
import alertPage from '../pageobjects/practice/alert.page';
import checkboxPage from '../pageobjects/practice/checkBox.page';
import registerPage from '../pageobjects/Create-account/register.page';
import signinPage from '../pageobjects/Create-account/signIn.page';
import signupPage from '../pageobjects/Create-account/signUp.page';
import dropdownPage from '../pageobjects/practice/dropDown.page';
import elementdisplayedPage from '../pageobjects/practice/elementDisplayed.page';
import enablePage from '../pageobjects/practice/enable.page';
import iframePage from '../pageobjects/practice/iframe.page';
import reloadPage from '../pageobjects/practice/reload.page';
import multipleselectPage from '../pageobjects/practice/multipleSelect.page';
import mycourseheaderPage from '../pageobjects/practice/myCourseHeader.page';
import opentabPage from '../pageobjects/practice/openTab.page';
import openwindowPage from '../pageobjects/practice/openWindow.page';
import practicePage from '../pageobjects/practice/practice.page';
import radiobuttonPage from '../pageobjects/practice/radioButton.page';
import tablecelltextPage from '../pageobjects/practice/tableCellText.page';

Given(/^I am on the landing page of letskodeit$/, async () => {
    await browser.url("https://courses.letskodeit.com/practice")
    await browser.maximizeWindow()
});

Then(/^I should see the header as \"([^\"]*)\"$/, async (practicepage) => {
    await expect(practicePage.practiceHeader).toHaveText(practicepage)
});

When(/^I click on radiobutton, select from drop down$/, async () => {
    await radiobuttonPage.clickRadioButton()
    await dropdownPage.selectDropDown()
});

When(/^I select from multiple select, click on checkbox$/, async () => {
    await multipleselectPage.setMultipleSelect()
    await checkboxPage.clickCheckBox()
});

When(/^I click on open window$/, async () => {
    await openwindowPage.clickOpenWindow()
});

When(/^I must be navigated to all courses page$/, async () => {
    const id = await browser.getWindowHandles()
    await browser.switchToWindow(id[1])
});

Then(/^The header of page should be \"([^\"]*)\"$/, async (allcourses) => {
    await expect(openwindowPage.allcoursesHeader).toHaveText(allcourses)
});

When(/^I close all courses page and navigate to practice page$/, async () => {
    const id = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(id[0])
});

When(/^I click on open tab$/, async () => {
    await opentabPage.clickOpenTab()
});

When(/^I should be navigated to courses page$/, async () => {
    const id = await browser.getWindowHandles()
    await browser.switchToWindow(id[1])
});

When(/^I click on javascript for beginners$/, async () => {
    await opentabPage.clickJavascript()
});

Then(/^I must see the header of course as \"([^\"]*)\"$/, async (javascriptforbeginners) => {
    await expect(opentabPage.javascriptHeader).toHaveText(javascriptforbeginners)
});

When(/^I must close the window and navigate to previous window$/, async () => {
    const id = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(id[0])
});

When(/^I enter name and click confirm$/, async () => {
    await alertPage.enterName()
    await alertPage.clickConfirm()
});

Then(/^The alert header contains \"([^\"]*)\"$/, async (areyousure) => {
    var alertprompt = await browser.getAlertText()
    expect(alertprompt).toHaveTextContaining(areyousure)
    await browser.dismissAlert()
});

Then(/^I validate the text of webtable \"([^\"]*)\"$/, async (seleniumwebdriverwithjava) => {
    await expect(tablecelltextPage.tablecellText).toHaveText(seleniumwebdriverwithjava)
});

When(/^I click on enable and enter text$/, async () => {
    await enablePage.clickEnable()
    await enablePage.setEnableText()
});

When(/^I click on show and enter text$/, async () => {
    await elementdisplayedPage.clickShow()
    await elementdisplayedPage.setShowText()
});

When(/^I hover and click on reload$/, async () => {
    await reloadPage.clickReload()
});

Then(/^I see page header as \"([^\"]*)\"$/, async (practicepage) => {
    await expect(practicePage.practiceHeader).toHaveText(practicepage)
});

Then(/^I validate the header of iframe as \"([^\"]*)\"$/, async (allcourses) => {
    await browser.switchToFrame(0)
    await expect(iframePage.iframeHeader).toHaveText(allcourses)
    browser.switchToFrame(null)
});

When(/^I click on signin$/, async () => {
    await signinPage.clickSignIn()
});

When(/^I click on signup$/, async () => {
    await signupPage.clickSignUp()
});

Then(/^I must navigate to signup page with header \"([^\"]*)\"$/, async (signup) => {
    await expect(signupPage.signupHeader).toHaveText(signup)
});

When(/^I enter data in all feilds$/, async () => {
    await registerPage.setFirstName(faker.name.firstName())
    await registerPage.setLastName(faker.name.lastName())
    await registerPage.setEmail(faker.internet.email())
    const pswd = faker.internet.password()
    await registerPage.setPassword(pswd)
    await registerPage.setConfirmPassword(pswd)
});

When(/^I click on signup button$/, async () => {
    await registerPage.clickSignupSubmit()
});

Then(/^I navigate to my course page with header \"([^\"]*)\"$/, async (mycourses) => {
    await expect(mycourseheaderPage.mycoursesHeader).toHaveText(mycourses)
});
