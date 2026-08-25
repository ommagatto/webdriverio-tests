class PickEnterprisePlanPage {

    pageURL = "https://github.com/organizations/enterprise_plan"

    get header() { return $('h1[class="d-md-block mt-0 tmp-mb-3 text-center h1 lh-condensed-ultra "]') }
    get enterpriseCloud() { return $('//main/div/div[2]/div/div/div[1]') }
    get enterpriseServer() { return $('//main/div/div[2]/div/div/div[2]') }
    
    async checkPageURL() {
        await expect(browser).toHaveUrl(expect.stringContaining(this.pageURL))
    }

    async assertHeaderText() {
        await expect(this.header).toHaveText("Pick your trial plan")
    }

    async assertEnterpriseCloudText() {
        await expect(this.enterpriseCloud).toHaveText( expect.stringContaining("Enterprise Cloud") )
    }

    async assertEnterpriseServerText() {
        await expect(this.enterpriseServer).toHaveText( expect.stringContaining("Enterprise Server") )
    }

};

export default new PickEnterprisePlanPage()
