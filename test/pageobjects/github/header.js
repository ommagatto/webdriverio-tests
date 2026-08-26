class Header {

    get pricingButton() { return $('//header/div/div[2]/div/nav/ul/li[6]/a') }
    get searchButton() { return $('button[aria-label="Search or jump to, type / to search"]') }
    get searchInput() { return $('input[aria-label="Search or jump to"]') }


    async clickPricingButton() {
        await this.pricingButton.click()
    }

    async clickSearchButton() {
        await this.searchButton.click()
    }

    async addToSeachInput(value) {
        await this.searchInput.addValue(value)
    }

};



export default new Header()
