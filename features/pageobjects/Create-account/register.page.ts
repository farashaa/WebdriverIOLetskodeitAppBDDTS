import { addLog } from '../../../utils/addLog'
class Register {
    get firstName() {
        return $("//input[@placeholder='First Name']")
    }
    async setFirstName(firstName: string) {
        await this.firstName.setValue(firstName)
        addLog(`first name value set to : ${firstName}`)
    }
    get lastName() {
        return $("#last_name")
    }
    async setLastName(lastName: string) {
        await this.lastName.setValue(lastName)
        addLog(`last name value set to : ${lastName}`)
    }
    get email() {
        return $("//input[@placeholder='Email Address']")
    }
    async setEmail(email: string) {
        await this.email.setValue(email)
        addLog(`email value set to : ${email}`)
    }
    get password() {
        return $("#password")
    }
    async setPassword(password: string) {
        await this.password.setValue(password)
        addLog(`password value set to : ${password}`)
    }
    get confirmPassword() {
        return $("#password_confirmation")
    }
    async setConfirmPassword(confirmPassword: string) {
        await this.confirmPassword.setValue(confirmPassword)
        addLog(`confirm password value set to : ${confirmPassword}`)
    }
    get signupSubmit() {
        return $("//input[@type='submit']")
    }
    async clickSignupSubmit() {
        await this.signupSubmit.click()
        addLog(`performed click on : ${await this.signupSubmit.selector}`)
    }
    get mycoursesHeader() {
        return $("//h1[@class='dynamic-heading']")
    }
}
export default new Register()