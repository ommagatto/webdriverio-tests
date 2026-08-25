class SecuritySubNavBar {

    get gitHubSecuritySubNav()      { return $('div[class="Primer_Brand__SubNav-module__SubNav__header-container___seaW6"]') };
    get advancedSecuritySubNav()    { return $('li a[href="https://github.com/security/advanced-security?locale=en-US"]') };
    get secretProtectionSubNav()    { return $('li a[href="https://github.com/security/advanced-security/secret-protection?locale=en-US"]') };
    get codeSecuritySubNav()        { return $('li a[href="https://github.com/security/advanced-security/code-security?locale=en-US"]') };
    get softwareSupplyChainSubNav() { return $('li a[href="https://github.com/security/advanced-security/software-supply-chain?locale=en-US"]') };
    get plansSubNav()               { return $('li a[href="https://github.com/security/plans?locale=en-US"]') };
    
    
    // GitHub Security
    async clickGitHubSecuritySubNav() {
        await this.gitHubSecuritySubNav.click()
    };

    // Advanced Security
    async clickAdvancedSecuritySubNav() {
        await this.advancedSecuritySubNav.click()
    };

    // Secret Protection
    async clickSecretProtectionSubNav() {
        await this.secretProtectionSubNav.click()
    };

    // Code Security
    async clickCodeSecuritySubNav() {
        await this.codeSecuritySubNav.click()
    };

    // Supply Chain Security
    async clickSoftwareSupplyChainSubNav() {
        await this.softwareSupplyChainSubNav.click()
    };

    // Plans & pricing
    async clickPlansSubNav() {
        await this.plansSubNav.click()
    };

};

export default new SecuritySubNavBar()
