import report from '@wdio/allure-reporter'
class OpenWindow {
    get openWindow() {
        return $("#openwindow")
    }
    async clickOpenWindow() {
        await this.openWindow.click()
        report.addStep(`performed click on : ${await this.openWindow.selector}`)
    }
    get allcoursesHeader() {
        return $("//h1")
    }
}
export default new OpenWindow()