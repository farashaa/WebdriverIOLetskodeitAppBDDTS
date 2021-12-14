class Register {
    get firstName() {
        return $("//input[@placeholder='First Name']")
    }
    async setFirstName(firstName: string) {
        await this.firstName.setValue(firstName)
    }
    get lastName() {
        return $("#last_name")
    }
    async setLastName(lastName: string) {
        await this.lastName.setValue(lastName)
    }
    get email() {
        return $("//input[@placeholder='Email Address']")
    }
    async setEmail(email: string) {
        await this.email.setValue(email)
    }
    get password() {
        return $("#password")
    }
    async setPassword(password: string) {
        await this.password.setValue(password)
    }
    get confirmPassword() {
        return $("#password_confirmation")
    }
    async setConfirmPassword(confirmPassword: string) {
        await this.confirmPassword.setValue(confirmPassword)
    }
    get signupSubmit() {
        return $("//input[@type='submit']")
    }
    async clickSignupSubmit() {
        await this.signupSubmit.click()
    }
}
export default new Register()