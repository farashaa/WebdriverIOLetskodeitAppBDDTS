import report from '@wdio/allure-reporter'
class ElementDisplayed {
    get show() {
        return $("#show-textbox")
    }
    async clickShow() {
        await this.show.click()
        report.addStep(`performed click on : ${await this.show.selector}`)
    }
    get showText() {
        return $("#displayed-text")
    }
    async setShowText(showTextValue : string) {
        await this.showText.setValue(showTextValue)
        report.addStep(`entered : ${showTextValue}`)
    }
}
export default new ElementDisplayed()