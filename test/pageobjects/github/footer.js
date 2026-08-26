class Footer {

    get footer() { return $('[partial-name="marketing-footer"]') }

    get pricing() { return $('//footer/div[1]/div/div/nav[1]/ul/li[6]/a/span') }

    get gitHubMobile() { return $('//footer/div[1]/div/div/nav[2]/ul/li[6]/a/span') }
    


    // Scroll to Footer
    async scrollToFooter() {
        await this.footer.scrollIntoView({
            block: "start",
        });
    };


    async clickOnPricing() {
        await this.pricing.click()
    }
    
    async clickGitHubMobile() {
        await this.gitHubMobile.click()
    }

    async verifyPricingIsDisplayed() {
        await expect(this.pricing).toBeDisplayed()
    }


}
    
export default new Footer()
