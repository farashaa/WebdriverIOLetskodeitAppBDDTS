class Alert {
    get name() {
        return $("//input[@placeholder='Enter Your Name']")
    }
    async enterName() {
        await this.name.setValue("xyz")
    }
    get confirm() {
        return $("#confirmbtn")
    }
    async clickConfirm() {
        await this.confirm.click()
    }
}
export default new Alert()