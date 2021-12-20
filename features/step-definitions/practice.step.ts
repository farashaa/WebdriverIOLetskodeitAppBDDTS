import { Given, When, Then } from '@wdio/cucumber-framework';
import faker from "faker"
import registerPage from '../pageobjects/Create-account/register.page';
import signinPage from '../pageobjects/Create-account/signIn.page';
import signupPage from '../pageobjects/Create-account/signUp.page';
import iframePage from '../pageobjects/practice/iframe.page';
import reloadPage from '../pageobjects/practice/reload.page';
import practicePage from '../pageobjects/practice/practice.page';
import landingPageStep from '../pageobjects/practice/landingPage.step';
import data from '../../testdata/data.json'
import firstDivisionPage from '../pageobjects/practice/firstDivision.page';
import secondDivisionPage from '../pageobjects/practice/secondDivision.page';
import thirdDivisionPage from '../pageobjects/practice/thirdDivision.page';

Given(/^I am on the landing page of letskodeit$/, async () => {
    await landingPageStep.invokeUrl()
});

Then(/^I should see the header as \"([^\"]*)\"$/, async (practicepage) => {
    await expect(practicePage.practiceHeader).toHaveText(practicepage)
});

When(/^I click on radiobutton$/, async () => {
    await firstDivisionPage.clickRadioButton()
});

Then(/^I can see the radiobutton selected$/, async () => {
    await firstDivisionPage.radioButton.isSelected()
});

When(/^I select from drop down$/, async () => {
    await firstDivisionPage.selectDropDown(data.carSelect)
});

Then(/^I can see the text of dropdown as \"([^\"]*)\"$/, async (bmw) => {
    expect(firstDivisionPage.selectDropDown).toHaveText(bmw)
});

When(/^I select from multiple select$/, async () => {
    await firstDivisionPage.setMultipleSelect(data.multipleSelectValue)
});

Then(/^I can see the text of multipleselect as \"([^\"]*)\"$/, async (peach) => {
    expect(firstDivisionPage.setMultipleSelect).toHaveText(peach)
});

When(/^I click on checkbox$/, async () => {
    await firstDivisionPage.clickCheckBox()
});

Then(/^I can see the checkbox selected$/, async () => {
    await firstDivisionPage.checkbox.isSelected()
});

When(/^I click on open window$/, async () => {
    await secondDivisionPage.clickOpenWindow()
});

When(/^I must be navigated to all courses page$/, async () => {
    const id = await browser.getWindowHandles()
    await browser.switchToWindow(id[1])
});

Then(/^The header of page should be \"([^\"]*)\"$/, async (allcourses) => {
    await expect(secondDivisionPage.allcoursesHeader).toHaveText(allcourses)
});

When(/^I close all courses page and navigate to practice page$/, async () => {
    const id = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(id[0])
});

When(/^I click on open tab$/, async () => {
    await secondDivisionPage.clickOpenTab()
});

When(/^I should be navigated to courses page$/, async () => {
    const id = await browser.getWindowHandles()
    await browser.switchToWindow(id[1])
});

When(/^I click on javascript for beginners$/, async () => {
    await secondDivisionPage.clickJavascript()
});

Then(/^I must see the header of course as \"([^\"]*)\"$/, async (javascriptforbeginners) => {
    await expect(secondDivisionPage.javascriptHeader).toHaveText(javascriptforbeginners)
});

When(/^I must close the window and navigate to previous window$/, async () => {
    const id = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(id[0])
});

When(/^I enter name and click confirm$/, async () => {
    await secondDivisionPage.enterName(faker.name.firstName())
    await secondDivisionPage.clickConfirm()
});

Then(/^The alert header contains \"([^\"]*)\"$/, async (areyousure) => {
    const alertMessage = await browser.getAlertText()
    await browser.acceptAlert()
    expect(alertMessage).toContain(areyousure)
});

Then(/^I validate the text of webtable \"([^\"]*)\"$/, async (seleniumwebdriverwithjava) => {
    await expect(thirdDivisionPage.tablecellText).toHaveText(seleniumwebdriverwithjava)
});

When(/^I click on enable and enter text$/, async () => {
    await thirdDivisionPage.clickEnable()
    await thirdDivisionPage.setEnableText(data.enableTextValue)
});

When(/^I click on show and enter text$/, async () => {
    await thirdDivisionPage.clickShow()
    await thirdDivisionPage.setShowText(data.showTextValue)
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
    await expect(registerPage.mycoursesHeader).toHaveText(mycourses)
});
