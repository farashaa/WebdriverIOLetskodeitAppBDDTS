import report from '@wdio/allure-reporter'
class Reload {
    get mouseHover() {
        return $("#mousehover")
    }
    get reload() {
        return $("//a[text()='Reload']")
    }
    async clickReload() {
        await this.mouseHover.scrollIntoView()
        await this.mouseHover.moveTo()
        report.addStep(`scrolled and moved to: ${await this.mouseHover.selector}`)
        await this.reload.click()
        report.addStep(`performed click on : ${await this.reload.selector}`)
    }
}
export default new Reload()
