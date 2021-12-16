import report from '@wdio/allure-reporter'
class Enable {
    get enable() {
        return $("#enabled-button")
    }
    async clickEnable() {
        await this.enable.click()
        report.addStep(`performed click on : ${await this.enable.selector}`)
    }
    get enableText() {
        return $("#enabled-example-input")
    }
    async setEnableText(enableTextValue : string) {
        await this.enableText.setValue(enableTextValue)
        report.addStep(`enetering value in enable element: ${enableTextValue}`)
    }
}
export default new Enable()