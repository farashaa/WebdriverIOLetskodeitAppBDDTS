class ElementDisplayed {
    get show() {
        return $("#show-textbox")
    }
    async clickShow() {
        await this.show.click()
    }
    get showText() {
        return $("#displayed-text")
    }
    async setShowText() {
        await this.showText.setValue("show")
    }
}
export default new ElementDisplayed()