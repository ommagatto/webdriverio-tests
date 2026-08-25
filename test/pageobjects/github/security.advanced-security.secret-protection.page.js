class SecurityAdvancedSecuritySecretProtectionPage {

    get secretProtectionHeader() { return $('h1[id="hero-section-brand-heading"]')}
    
    
    async assertHeaderText() {
        await expect(this.secretProtectionHeader).toHaveText("Keep your secrets secret")
    }

    

};

export default new SecurityAdvancedSecuritySecretProtectionPage()
