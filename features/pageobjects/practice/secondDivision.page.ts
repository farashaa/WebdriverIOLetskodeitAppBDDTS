import { addLog } from '../../../utils/addLog'
class secondDivision {
    get openWindow() {
        return $("#openwindow")
    }
    async clickOpenWindow() {
        await this.openWindow.click()
        addLog(`performed click on : ${await this.openWindow.selector}`)
    }
    get allcoursesHeader() {
        return $("//h1")
    }
    get openTab() {
        return $("#opentab")
    }
    async clickOpenTab() {
        await this.openTab.click()
        addLog(`performed click on : ${await this.openTab.selector}`)
    }
    get javascript() {
        return $("//*[@id='course-list']/div[1]/div/a/div[2]/h4")
    }
    async clickJavascript() {
        await this.javascript.click()
        addLog(`performed click on : ${await this.javascript.selector}`)
    }
    get javascriptHeader() {
        return $(".dynamic-heading.text-blue.custom-heading")
    }
    get name() {
        return $("//input[@placeholder='Enter Your Name']")
    }
    async enterName(alertName: string) {
        await this.name.setValue(alertName)
        addLog(`entering name : ${alertName}`)
    }
    get confirm() {
        return $("#confirmbtn")
    }
    async clickConfirm() {
        await this.confirm.click()
        addLog(`performed click on : ${await this.confirm.selector}`)
    }
}
export default new secondDivision()