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
        await this.reload.click()
    }
}
export default new Reload()
