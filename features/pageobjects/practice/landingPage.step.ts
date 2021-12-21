import { addLog } from '../../../utils/addLog'
class LandingPage {
    async invokeUrl() {
        await browser.url("https://courses.letskodeit.com/practice")
        await browser.maximizeWindow()
        addLog("invoking url")
        addLog("Maximizing window")
    }
}
export default new LandingPage()