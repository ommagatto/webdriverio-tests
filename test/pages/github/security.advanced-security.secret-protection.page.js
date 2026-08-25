class SecurityAdvancedSecuritySecretProtectionPage {

    get secretProtectionHeader()    { return $('h1[class="Primer_Brand__Heading-module__Heading___fudyh Primer_Brand__Heading-module__Heading-font--mona-sans___0OM_a Primer_Brand__Heading-module__Heading--1___O9POI Primer_Brand__Heading-module__Heading--textWrap-balance___XJ9OD Primer_Brand__Hero-module__Hero-heading___HMve3"]')}
    
    
    async assertHeaderText() {
        await expect(this.secretProtectionHeader).toHaveText("Keep your secrets secret")
    }

    

};

export default new SecurityAdvancedSecuritySecretProtectionPage()