import report from '@wdio/allure-reporter'
class DropDown {
    get dropdown() {
        return $("#carselect")
    }
    async selectDropDown(carSelect : string) {
        await this.dropdown.selectByVisibleText(carSelect)
        report.addStep(`selected by visible text : ${carSelect}`)
    }
}
export default new DropDown()