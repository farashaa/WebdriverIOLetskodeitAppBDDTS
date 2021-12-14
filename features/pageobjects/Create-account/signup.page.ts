class SignUp {
    get signUp() {
        return $("//a[@class='dynamic-link small' and text()=' Sign Up']")
    }
    async clickSignUp() {
        await this.signUp.click()
    }
    get signupHeader() {
        return $(".dynamic-heading")
    }
}
export default new SignUp()