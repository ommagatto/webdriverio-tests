class SecurityAdvancedSecuritySoftwareSupplyChainPage {

    get softwareSupplyChainHeader() { return $('h1[id="hero-section-brand-heading"]') }
    
    
    async assertHeaderText() {
        await expect(this.softwareSupplyChainHeader).toHaveText("Secure your software supply chain")
    }

};

export default new SecurityAdvancedSecuritySoftwareSupplyChainPage()
