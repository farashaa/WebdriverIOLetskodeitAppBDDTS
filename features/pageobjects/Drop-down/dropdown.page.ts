class DropDown {
    get dropdown() {
        return $("#carselect")
    }
    async selectDropDown() {
        await this.dropdown.selectByVisibleText("BMW")
    }
}
export default new DropDown()