import report from '@wdio/allure-reporter'
class RadioButton {
    get radioButton() {
        return $("#benzradio")
    }
    async clickRadioButton() {
        await this.radioButton.click()
        report.addStep(`performed click on : ${await this.radioButton.selector}`)
    }
}
export default new RadioButton()