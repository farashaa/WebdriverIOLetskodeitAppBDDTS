import report from '@wdio/allure-reporter'
class Alert {
    get name() {
        return $("//input[@placeholder='Enter Your Name']")
    }
    async enterName(alertName :string) {
        await this.name.setValue(alertName)
        report.addStep(`entering name : ${alertName}`)
    }
    get confirm() {
        return $("#confirmbtn")
    }
    async clickConfirm() {
        await this.confirm.click()
        report.addStep(`performed click on : ${await this.confirm.selector}`)
    }
}
export default new Alert()