import { browser, expect } from "@wdio/globals"
import { Key } from 'webdriverio'

import MainPage from "../pageobjects/github/main.page.js"
import Header from "../pageobjects/github/header.js"
import Footer from "../pageobjects/github/footer.js"


// Security / Sub Navigation Bar
import SecuritySubNavBar from "../pageobjects/github/security.sub-nav-bar.js"
// Security / Advanced Security
import SecurityAdvancedSecurityPage from "../pageobjects/github/security.advanced-security.page.js"
// Security / Secret Protection
import SecurityAdvancedSecuritySecretProtectionPage from "../pageobjects/github/security.advanced-security.secret-protection.page.js"
// Security / Code Security
import SecurityAdvancedSecurityCodeSecurityPage from "../pageobjects/github/security.advanced-security.code-security.page.js"
// Security / Supply Chain Security
import SecurityAdvancedSecuritySoftwareSupplyChainPage from "../pageobjects/github/security.advanced-security.software-supply-chain.page.js"
// Security / Plans & pricing
import SecurityPlansPage from "../pageobjects/github/security.plans.js"

// Pricing
import PricingPage from "../pageobjects/github/pricing.page.js"

// Pick your trial enterprise plan
import PickEnterprisePlanPage from "../pageobjects/github/organizations.enterprise_plan.js"

// GitHub Mobile
import GitHubMobilePage from "../pageobjects/github/mobile.page.js"

// Search Page
import SearchPage from "../pageobjects/github/search.js"




describe("github tests", () => {
    // Resize browser window to 1440x900
    beforeEach(async () => {
        await browser.setWindowSize(1440, 900);
    });



    // Test Case 1: Validate GitHub Advanced Security Navigation and Headers

    // 1.   Open "https://github.com/"
    //      Expected Result:
    //      The homepage should load successfully

    // 2.   Scroll to the "Built-in application security where found means fixed" section
    //      Expected Result:
    //      The "Built-in application security where found means fixed" section should be visible

    // 3.   Verify that the text "Explore GitHub Advanced Security" is visible
    //      Expected Result:
    //      The link text "Explore GitHub Advanced Security" should be visible

    // 4.   Click the "Explore GitHub Advanced Security" link
    //      Expected Result:
    //      The Advanced Security page should load successfully

    // 5.   Verify that the header "Security that moves at the speed of development" is visible
    //      Expected Result:
    //      The header "Security that moves at the speed of development" should be visible

    // 6.   Click the "Secret Protection" button on the navigation bar
    //      Expected Result:
    //      The "Secret Protection" section should load successfully,
    //      and the "Secret Protection" navigation item should be selected/active

    // 7.   Verify that the header "Keep your secrets secret" is visible
    //      Expected Result:
    //      The header "Keep your secrets secret" should be visible

    // 8.   Click the "Code Security" button on the navigation bar
    //      Expected Result:
    //      The "Code Security" section should load successfully,
    //      and the "Code Security" navigation item should be selected/active

    // 9.   Verify that the header "Application security where found means fixed" is visible
    //      Expected Result:
    //      The header "Application security where found means fixed" should be visible

    // 10.  Click the "Supply Chain Security" button on the navigation bar
    //      Expected Result:
    //      The "Supply Chain Security" section should load successfully, and the
    //      "Supply Chain Security" navigation item should be selected/active

    // 11.  Verify that the header "Secure your software supply chain" is visible
    //      Expected Result:
    //      The header "Secure your software supply chain" should be visible

    // 12.  Click the "Plans & pricing" button on the navigation bar
    //      Expected Result:
    //      The "Plans & pricing" section should load successfully,
    //      and the "Plans & pricing" navigation item should be selected/active

    // 13.  Verify that the header "The perfect pair for complete protection" is visible
    //      Expected Result:
    //      The header "The perfect pair for complete protection" should be visible


    it("should validate advanced security navigation and headers", async () => {
        await MainPage.openMainPage()
        await MainPage.scrollToSecuritySection()
        await MainPage.assertExploreAdvancedSecurityLinkText()


        await MainPage.clickExploreAdvancedSecurityLink()
        await SecurityAdvancedSecurityPage.assertHeaderText()

        // Secret Protection
        await SecuritySubNavBar.clickSecretProtectionSubNav()
        await SecurityAdvancedSecuritySecretProtectionPage.assertHeaderText()

        // Code Security
        await SecuritySubNavBar.clickCodeSecuritySubNav()
        await SecurityAdvancedSecurityCodeSecurityPage.assertHeaderText()

        // Supply Chain Security
        await SecuritySubNavBar.clickSoftwareSupplyChainSubNav()
        await SecurityAdvancedSecuritySoftwareSupplyChainPage.assertHeaderText()

        // Plans & pricing
        await SecuritySubNavBar.clickPlansSubNav()
        await SecurityPlansPage.assertHeaderText()
    });





    // Test Case 2: Pick Enterprise Cloud Trial Plan

    // 1.   Open "https://github.com/"
    //      Expected Result:
    //      The homepage should load successfully

    // 2.   Scroll to the footer section
    //      Expected Result:
    //      The footer section should be visible

    // 3.   Verify that the "Pricing" link is visible
    //      Expected Result:
    //      The "Pricing" link should be visible

    // 4.   Click the "Pricing" link
    //      Expected Result:
    //      The Pricing page should load successfully

    // 5.   Verify that the header "Try GitHub, the complete developer platform" is visible
    //      Expected Result:
    //      The header "Try GitHub, the complete developer platform" should be visible

    // 6.   Verify that the "Start a free trial" button in the Enterprise card is visible
    //      Expected Result:
    //      The "Start a free trial" button in the Enterprise card should be visible

    // 7.   Click the "Start a free trial" button
    //      Expected Result:
    //      The trial plan selection page should load successfully

    // 8.   Verify that the header "Pick your trial plan" is visible
    //      Expected Result:
    //      The header "Pick your trial plan" should be visible

    // 9.   Verify that the "Enterprise Cloud" and "Enterprise Server" trial plans are displayed
    //      Expected Result:
    //      The "Enterprise Cloud" and "Enterprise Server" trial plans should be visible on the page


    it.only("should pick enterprise cloud trial plan", async () => {
        await MainPage.openMainPage()
        await Footer.scrollToFooter()

        await Footer.verifyPricingIsDisplayed()
        await Footer.clickOnPricing()
        await PricingPage.checkPageURL()

        await PricingPage.assertHeaderText()
        await PricingPage.scrollTostartFreeTrialButton()
        await PricingPage.verifyStartFreeTrialButtonIsDisplayed()
        await PricingPage.clickStartFreeTrialButton()
        await PickEnterprisePlanPage.checkPageURL()

        
        //Verify that the "Pick your trial plan" header is visible
        await PickEnterprisePlanPage.assertHeaderText()
        // Verify that both Enterprise trial plans are displayed
        await PickEnterprisePlanPage.assertEnterpriseCloudText()
        await PickEnterprisePlanPage.assertEnterpriseServerText()
    });





    // Test Case 3: Verify GitHub Mobile App Download Links

    // 1.   Open "https://github.com/"
    //      Expected Result:
    //      The homepage should load successfully

    // 2.   Scroll to the footer section
    //      Expected Result:
    //      The footer section should be visible

    // 3.   Click the "GitHub Mobile" link
    //      Expected Result:
    //      The GitHub Mobile page should load successfully

    // 4.   Verify that the "Download for iOS" button is visible
    //      Expected Result:
    //      The "Download for iOS" button should be visible and enabled

    // 5.   Click the "Download for iOS" button
    //      Expected Result:
    //      The GitHub page on App Store should load successfully

    // 6.   Verify that the URL is the GitHub app page on App Store
    //      Expected Result:
    //      The current URL should contain "apps.apple.com/us/app/github/id1477376905"

    // 7.   Navigate back to the GitHub Mobile page
    //      Expected Result:
    //      The GitHub Mobile page should load successfully

    // 8.   Verify that the "Download for Android" button is visible
    //      Expected Result:
    //      The "Download for Android" button should be visible and enabled

    // 9.   Click the "Download for Android" button
    //      Expected Result:
    //      The GitHub page on Google Play should load successfully

    // 10.  Verify that the URL is the GitHub app page on Google Play
    //      Expected Result:
    //      The current URL should contain "play.google.com/store/apps/details?id=com.github.android"


    it.only("should verify GitHub Mobile app download links for iOS and Android", async () => {
        await MainPage.openMainPage()
        await Footer.scrollToFooter()
        await Footer.clickGitHubMobile()

        // iOS
        await GitHubMobilePage.verifyDownloadForiOSButtonIsDisplayed()
        await GitHubMobilePage.verifyDownloadForiOSButtonIsEnabled()
        await GitHubMobilePage.clickDownloadForiOSButton()
        await expect(browser).toHaveUrl(expect.stringContaining("https://apps.apple.com/us/app/github/id1477376905"))
        
        await browser.back()

        // Android
        await GitHubMobilePage.verifyDownloadForAndroidButtonIsDisplayed()
        await GitHubMobilePage.verifyDownloadForAndroidButtonIsEnabled()
        await GitHubMobilePage.clickDownloadForAndroidButton()
        await expect(browser).toHaveUrl("https://play.google.com/store/apps/details?id=com.github.android")
    });





    // Test Case 4: Perform a Search

    // 1.   Open "https://github.com/"
    //      Expected Result:
    //      The homepage should load successfully

    // 2.   Click the "Search" input field in the header
    //      Expected Result:
    //      The search input field should be focused and ready for text entry

    // 3.   Enter "wine" into the search field and press the Enter key
    //      Expected Result:
    //      The search results page should load successfully
    //      and display results for "wine"

    // 4.   Verify that the word "wine" appears in one of the result cards
    //      Expected Result:
    //      At least one search result card should contain the word "wine",
    //      and its href should correspond to a valid search result

    
    it.only("should perform a search", async () => {
        await MainPage.openMainPage()
        await Header.clickSearchButton()

        await Header.searchInput.addValue("wine")
        await expect(Header.searchInput).toHaveValue("wine")
        await browser.keys(Key.Enter)

        // Verify that the word "wine" appears in one of the result cards
        await SearchPage.checkResultsList("wine")
    });





    // Test Case 5: Verify Pricing Page Features

    // 1.   Open "https://github.com/"
    //      Expected Result:
    //      The homepage should load successfully

    // 2.   Click the "Pricing" link in the header
    //      Expected Result:
    //      The Pricing page should load successfully

    // 3.   Verify that the header "Try GitHub, the complete developer platform" is visible
    //      Expected Result:
    //      The header "Try GitHub, the complete developer platform" should be visible

    // 4.   Scroll to the "Compare all features" section
    //      Expected Result:
    //      The "Compare all features" section should be visible

    // 5.   Click the "Compare all features" link
    //      Expected Result:
    //      The Compare Features page or section should load successfully

    // 6.   Verify that the header "Compare features" is visible
    //      Expected Result:
    //      The header "Compare features" should be visible

    

});













