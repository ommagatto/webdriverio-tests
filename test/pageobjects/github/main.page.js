class MainPage {

    get signUpButton() { return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]') }
    get securitySection() { return $('section[id="security"]') }
    get exploreAdvancedSecurityLink() { return $('div a[href="/security/advanced-security"]') }

    // Footer
    get footer() { return $('[partial-name="marketing-footer"]') }
    


    // Open main page
    async openMainPage() {
        await browser.url("https://github.com/")
        await expect(browser).toHaveUrl(expect.stringContaining("github.com"))
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
