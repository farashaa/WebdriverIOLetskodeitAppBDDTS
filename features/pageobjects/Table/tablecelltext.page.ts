class TableCellText {
    get tablecellText() {
        return $("//td[@class='course-name' and text()='Selenium WebDriver With Java']")
    }
}
export default new TableCellText()