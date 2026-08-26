class Header {

    get searchButton() { return $('button[aria-label="Search or jump to, type / to search"]') }
    get searchInput() { return $('input[aria-label="Search or jump to"]') }


    async clickSearchButton() {
        await this.searchButton.click()
    }

    async addToSeachInput(value) {
        await this.searchInput.addValue(value)
    }

};



export default new Header()
