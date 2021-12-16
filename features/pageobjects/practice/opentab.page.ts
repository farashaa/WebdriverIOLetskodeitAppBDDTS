import report from '@wdio/allure-reporter'
class OpenTab {
    get openTab() {
        return $("#opentab")
    }
    async clickOpenTab() {
        await this.openTab.click()
        report.addStep(`performed click on : ${await this.openTab.selector}`)
    }
    get javascript() {
        return $("//*[@id='course-list']/div[1]/div/a/div[2]/h4")
    }
    async clickJavascript() {
        await this.javascript.click()
        report.addStep(`performed click on : ${await this.javascript.selector}`)
    }
    get javascriptHeader() {
        return $(".dynamic-heading.text-blue.custom-heading")
    }
}
export default new OpenTab()