class PracticePage {
    get practiceHeader() {
        return $("//h1[text()='Practice Page']")
    }
}
export default new PracticePage()