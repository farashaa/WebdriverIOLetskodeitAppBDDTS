class MycourseHeader{
    get mycoursesHeader() {
        return $("//h1[@class='dynamic-heading']")
    }
}
export default new MycourseHeader()