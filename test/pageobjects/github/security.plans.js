class SecurityPlansPage {

    get plansHeader() { return $('h1[id="hero-section-brand-heading"]') }
    
    
    async assertHeaderText() {
        await expect(this.plansHeader).toHaveText("The perfect pair for complete protection")
    }

};

export default new SecurityPlansPage()
