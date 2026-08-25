class PricingPage {

    pageURL = "https://github.com/pricing"

    get header() { return $('h1[class="h2-mktg"]') }
    get startFreeTrialButton() { return $('a[class="d-block btn-mktg btn-free-trial px-2"]') }


    async checkPageURL() {
        await expect(browser).toHaveUrl(this.pageURL)
    }

    async assertHeaderText() {
        await expect(this.header).toHaveText("Try the Copilot-powered platform")
    }


    async scrollTostartFreeTrialButton() {
        await this.startFreeTrialButton.scrollIntoView({
            block: "center",
        });
    };


    async verifyStartFreeTrialButtonIsDisplayed() {
        await expect(this.startFreeTrialButton).toBeDisplayed()
    }


    async clickStartFreeTrialButton() {
        await this.startFreeTrialButton.click()
    }

};

export default new PricingPage()
