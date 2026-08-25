class MainPage {

    pageURL = "https://github.com/"
    
    get signUpButton() { return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]') }
    get securitySection() { return $('section[id="security"]') }
    get exploreAdvancedSecurityLink() { return $('div a[href="/security/advanced-security"]') }
    


    // Open main page
    async openMainPage() {
        await browser.url(this.pageURL)
        await expect(browser).toHaveUrl( expect.stringContaining(this.pageURL) )
    }

    // Scroll to Footer
    async scrollIntoFooter() {
        await this.footer.scrollIntoView({
            block: "center",
        });
    };

    // Scroll to Security section
    async scrollToSecuritySection() {
        await this.securitySection.scrollIntoView({
            block: "center",
        });
    };

    // Advanced Security link
    async assertExploreAdvancedSecurityLinkText() {
        await expect(this.exploreAdvancedSecurityLink).toHaveText("Explore GitHub Advanced Security")
    }
    
    // Click the Security link
    async clickExploreAdvancedSecurityLink() {
        await this.exploreAdvancedSecurityLink.click()
    }
};


    
export default new MainPage()
