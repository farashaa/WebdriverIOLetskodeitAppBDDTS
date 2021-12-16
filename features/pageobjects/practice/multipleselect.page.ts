import report from '@wdio/allure-reporter'
class MultipleSelect {
    get multipleSelect() {
        return $("#multiple-select-example")
    }
    async setMultipleSelect(multipleSelectValue : string) {
        await this.multipleSelect.selectByVisibleText(multipleSelectValue)
        report.addStep(`selected by visible text: ${multipleSelectValue}`)
    }
}
export default new MultipleSelect()