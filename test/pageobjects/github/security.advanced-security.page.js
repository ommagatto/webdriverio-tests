class SecurityAdvancedSecurityPage {

    get advancedSecurityHeader() { return $('h1[class="Primer_Brand__Animation-module__Animation___cS_aI Primer_Brand__Animation-module__Animation--reveal-in-up___8fCQo Primer_Brand__Heading-module__Heading___fudyh Primer_Brand__Heading-module__Heading-font--mona-sans___0OM_a Primer_Brand__Heading-module__Heading--1___O9POI Primer_Brand__Heading-module__Heading--textWrap-balance___XJ9OD Primer_Brand__Animation-module__Animation--active___F4mYy"]') }
    
    
    async assertHeaderText() {
        await expect(this.advancedSecurityHeader).toHaveText("Security that moves at the speed of development")
    }



};

export default new SecurityAdvancedSecurityPage()
