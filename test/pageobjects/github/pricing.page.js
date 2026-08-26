class PricingPage {

    pageURL = "https://github.com/pricing"

    get header() { return $('h1[class="h2-mktg"]') }
    get compareFeaturesHeader() { return $('div[class="d-md-block p-responsive container-xl text-center tmp-my-8 tmp-my-md-9 js-compare-features-item"]>h1')}

    get startFreeTrialButton() { return $('a[class="d-block btn-mktg btn-free-trial px-2"]') }

    get compareAllFeaturesLink() { return $('a[href="#compare-features"]') }


    async checkPageURL() {
        await expect(browser).toHaveUrl(this.pageURL)
    }


    // Assert text

    async assertHeaderText() {
        await expect(this.header).toHaveText("Try GitHub, the complete developer platform")
    }

    async assertCompareFeaturesHeaderText() {
        await expect(this.compareFeaturesHeader).toHaveText("Compare features")
    }


    // Scroll to
    async scrollToStartFreeTrialButton() {
        await this.startFreeTrialButton.scrollIntoView({
            block: "center",
        });
    };

    async scrollToCompareAllFeatures() {
        await this.compareAllFeaturesLink.scrollIntoView({
            block: "center",
        })
    }


    // Click

    async clickStartFreeTrialButton() {
        await this.startFreeTrialButton.click()
    }

    async clickcompareAllFeaturesLink() {
        await this.compareAllFeaturesLink.click()
    }


    // Verify is displayed

    async verifyStartFreeTrialButtonIsDisplayed() {
        await expect(this.startFreeTrialButton).toBeDisplayed()
    }



};

export default new PricingPage()
