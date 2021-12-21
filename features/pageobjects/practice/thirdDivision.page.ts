import { addLog } from '../../../utils/addLog'
class thirdDivision {
    get show() {
        return $("#show-textbox")
    }
    async clickShow() {
        await this.show.click()
        addLog(`performed click on : ${await this.show.selector}`)
    }
    get showText() {
        return $("#displayed-text")
    }
    async setShowText(showTextValue: string) {
        await this.showText.setValue(showTextValue)
        addLog(`entered : ${showTextValue}`)
    }
    get enable() {
        return $("#enabled-button")
    }
    async clickEnable() {
        await this.enable.click()
        addLog(`performed click on : ${await this.enable.selector}`)
    }
    get enableText() {
        return $("#enabled-example-input")
    }
    async setEnableText(enableTextValue: string) {
        await this.enableText.setValue(enableTextValue)
        addLog(`enetering value in enable element: ${enableTextValue}`)
    }
    get tablecellText() {
        return $("//td[@class='course-name' and text()='Selenium WebDriver With Java']")
    }
}
export default new thirdDivision()