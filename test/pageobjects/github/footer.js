class Footer {

    get footer() { return $('[partial-name="marketing-footer"]') }

    get pricing() { return $('//footer/div[1]/div/div/nav[1]/ul/li[6]/a/span') }
    


    // Scroll to Footer
    async scrollToFooter() {
        await this.footer.scrollIntoView({
            block: "start",
        });
    };


    async clickOnPricing() {
        await this.pricing.click()
    }

    async isPricingDisplayed() {
        await this.pricing.isDisplayed({ withinViewport: true })
    }


}
    
export default new Footer()
