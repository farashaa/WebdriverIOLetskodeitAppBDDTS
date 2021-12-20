import report from '@wdio/allure-reporter'
class FirstDivision {
    get radioButton() {
        return $("#benzradio")
    }
    async clickRadioButton() {
        await this.radioButton.click()
        report.addStep(`performed click on : ${await this.radioButton.selector}`)
    }
    get checkbox() {
        return $("#hondacheck")
    }
    async clickCheckBox() {
        await this.checkbox.click()
        report.addStep(`performed click on : ${await this.checkbox.selector}`)
    }
    get dropdown() {
        return $("#carselect")
    }
    async selectDropDown(carSelect : string) {
        await this.dropdown.selectByVisibleText(carSelect)
        report.addStep(`selected by visible text : ${carSelect}`)
    }
    get multipleSelect() {
        return $("#multiple-select-example")
    }
    async setMultipleSelect(multipleSelectValue : string) {
        await this.multipleSelect.selectByVisibleText(multipleSelectValue)
        report.addStep(`selected by visible text: ${multipleSelectValue}`)
    }
}
export default new FirstDivision()