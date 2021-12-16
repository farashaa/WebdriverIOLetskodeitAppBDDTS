import report from '@wdio/allure-reporter'
class LandingPage {
    async invokeUrl() {
        await browser.url("https://courses.letskodeit.com/practice")
        await browser.maximizeWindow()
        report.addStep("invoking url")
        report.addStep("Maximizing window")
    }
}
export default new LandingPage()