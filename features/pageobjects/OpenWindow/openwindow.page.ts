class OpenWindow {
    get openWindow() {
        return $("#openwindow")
    }
    async clickOpenWindow() {
        await this.openWindow.click()
    }
    get allcoursesHeader() {
        return $("//h1")
    }
}
export default new OpenWindow()