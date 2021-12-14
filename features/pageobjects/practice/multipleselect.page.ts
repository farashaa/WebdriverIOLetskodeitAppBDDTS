class MultipleSelect {
    get multipleSelect() {
        return $("#multiple-select-example")
    }
    async setMultipleSelect() {
        await this.multipleSelect.selectByVisibleText("Peach")
    }
}
export default new MultipleSelect()