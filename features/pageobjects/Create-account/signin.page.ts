import { addLog } from '../../../utils/addLog'
class SignIn {
    get signIn() {
        return $("//a[@class='dynamic-link' and text()='Sign In']")
    }
    async clickSignIn() {
        await this.signIn.click()
        addLog(`performed click on : ${await this.signIn.selector}`)
    }
}
export default new SignIn()