class SecurityAdvancedSecurityPage {

    get advancedSecurityHeader() { return $('h1[id="hero-section-brand-heading"]') }
    
    
    async assertHeaderText() {
        await expect(this.advancedSecurityHeader).toHaveText("Security that moves at the speed of development")
    }



};

export default new SecurityAdvancedSecurityPage()
