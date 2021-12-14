class Enable {
    get enable() {
        return $("#enabled-button")
    }
    async clickEnable() {
        await this.enable.click()
    }
    get enableText() {
        return $("#enabled-example-input")
    }
    async setEnableText() {
        await this.enableText.setValue("abc")
    }
}
export default new Enable()