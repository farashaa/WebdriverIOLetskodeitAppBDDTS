class CheckBox {
    get checkbox() {
        return $("#hondacheck")
    }
    async clickCheckBox() {
        await this.checkbox.click()
    }
}
export default new CheckBox()