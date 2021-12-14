class RadioButton {
    get radioButton() {
        return $("#benzradio")
    }
    async clickRadioButton() {
        await this.radioButton.click()
    }
}
export default new RadioButton()