import report from '@wdio/allure-reporter'
class CheckBox {
    get checkbox() {
        return $("#hondacheck")
    }
    async clickCheckBox() {
        await this.checkbox.click()
        report.addStep(`performed click on : ${await this.checkbox.selector}`)
    }
}
export default new CheckBox()