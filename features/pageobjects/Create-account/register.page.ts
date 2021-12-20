import report from '@wdio/allure-reporter'
class Register {
    get firstName() {
        return $("//input[@placeholder='First Name']")
    }
    async setFirstName(firstName: string) {
        await this.firstName.setValue(firstName)
        report.addStep(`first name value set to : ${firstName}`)
    }
    get lastName() {
        return $("#last_name")
    }
    async setLastName(lastName: string) {
        await this.lastName.setValue(lastName)
        report.addStep(`last name value set to : ${lastName}`)
    }
    get email() {
        return $("//input[@placeholder='Email Address']")
    }
    async setEmail(email: string) {
        await this.email.setValue(email)
        report.addStep(`email value set to : ${email}`)
    }
    get password() {
        return $("#password")
    }
    async setPassword(password: string) {
        await this.password.setValue(password)
        report.addStep(`password value set to : ${password}`)
    }
    get confirmPassword() {
        return $("#password_confirmation")
    }
    async setConfirmPassword(confirmPassword: string) {
        await this.confirmPassword.setValue(confirmPassword)
        report.addStep(`confirm password value set to : ${confirmPassword}`)
    }
    get signupSubmit() {
        return $("//input[@type='submit']")
    }
    async clickSignupSubmit() {
        await this.signupSubmit.click()
        report.addStep(`performed click on : ${await this.signupSubmit.selector}`)
    }
    get mycoursesHeader() {
        return $("//h1[@class='dynamic-heading']")
    }
}
export default new Register()