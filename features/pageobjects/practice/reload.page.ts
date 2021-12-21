import { addLog } from '../../../utils/addLog'
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
        addLog(`scrolled and moved to: ${await this.mouseHover.selector}`)
        await this.reload.click()
        addLog(`performed click on : ${await this.reload.selector}`)
    }
}
export default new Reload()
