import report from '@wdio/allure-reporter'
class SignUp {
    get signUp() {
        return $("//a[@class='dynamic-link small' and text()=' Sign Up']")
    }
    async clickSignUp() {
        await this.signUp.click()
        report.addStep(`performed click on : ${await this.signUp.selector}`)
    }
    get signupHeader() {
        return $(".dynamic-heading")
    }
}
export default new SignUp()