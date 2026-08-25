class SecurityAdvancedSecurityCodeSecurityPage {

    get codeSecurityHeader() { return $('h1[id="hero-section-brand-heading"]') }
    
    
    async assertHeaderText() {
        await expect(this.codeSecurityHeader).toHaveText("Application security where found means fixed")
    }

};

export default new SecurityAdvancedSecurityCodeSecurityPage()
