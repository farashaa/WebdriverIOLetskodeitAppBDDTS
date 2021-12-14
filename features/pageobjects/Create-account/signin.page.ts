class SignIn {
    get signIn() {
        return $("//a[@class='dynamic-link' and text()='Sign In']")
    }
    async clickSignIn() {
        await this.signIn.click()
    }
}
export default new SignIn()