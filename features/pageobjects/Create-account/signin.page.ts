import report from '@wdio/allure-reporter'
class SignIn {
    get signIn() {
        return $("//a[@class='dynamic-link' and text()='Sign In']")
    }
    async clickSignIn() {
        await this.signIn.click()
        report.addStep(`performed click on : ${await this.signIn.selector}`)
    }
}
export default new SignIn()