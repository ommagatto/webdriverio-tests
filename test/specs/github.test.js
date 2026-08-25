import { browser, expect } from "@wdio/globals"
import MainPage from "../pages/github/main.page.js"
import Footer from "../pages/github/footer.js"


// Security / Sub Navigation Bar
import SecuritySubNavBar from "../pages/github/security.sub-nav-bar.js"
// Security / Advanced Security
import SecurityAdvancedSecurityPage from "../pages/github/security.advanced-security.page.js"
// Security / Secret Protection
import SecurityAdvancedSecuritySecretProtectionPage from "../pages/github/security.advanced-security.secret-protection.page.js"
// Security / Code Security
import SecurityAdvancedSecurityCodeSecurityPage from "../pages/github/security.advanced-security.code-security.page.js"
// Security / Supply Chain Security
import SecurityAdvancedSecuritySoftwareSupplyChainPage from "../pages/github/security.advanced-security.software-supply-chain.page.js"
// Security / Plans & pricing
import SecurityPlansPage from "../pages/github/security.plans.js"





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

// 5.   Verify that the header "Try the Copilot-powered platform" is visible
//      Expected Result:
//      The header "Try the Copilot-powered platform" should be visible

// 6.   Verify that the "Start a free trial" button in the Enterprise card is visible
//      Expected Result:
//      The "Start a free trial" button in the Enterprise card should be visible

// 7.   Click the "Start a free trial" button
//      Expected Result:
//      The trial plan selection page should load successfully

// 8.   Verify that the header "Pick your trial plan" is visible
//      Expected Result:
//      The header "Pick your trial plan" should be visible

// 9.   Click the "Enterprise Cloud" card
//      Expected Result:
//      The "Enterprise Cloud" trial plan should be selected successfully








// Test Case 3: Subscribe to Newsletter

// 1.   Open "https://github.com/"
//      Expected Result:
//      The homepage should load successfully

// 2.   Scroll to the footer section
//      Expected Result:
//      The footer section should be visible

// 3.   Verify that the "Subscribe" button is visible and clickable
//      Expected Result:
//      The "Subscribe" button should be visible and enabled

// 4.   Click the "Subscribe" button
//      Expected Result:
//      The GitHub newsletter page should load successfully

// 5.   Verify that the URL is "https://github.com/newsletter"
//      Expected Result:
//      The current URL should be "https://github.com/newsletter"

// 6.   Verify that the text "Get our developer newsletter" is visible
//      Expected Result:
//      The text "Get our developer newsletter" should be visible

// 7.   Enter "qwerty@qwerty.com" into the "Work email" input field
//      Expected Result:
//      The email address "qwerty@qwerty.com" should be entered successfully

// 8.   Click the "Country" dropdown
//      Expected Result:
//      The country dropdown should open successfully

// 9.   Search for and select a country, such as "France"
//      Expected Result:
//      The selected country should be displayed in the "Country" field

// 10.  Select the checkbox with the text:
//      "Yes, please. I’d like GitHub and affiliates to use my information for personalized communications,
//      targeted advertising, and campaign effectiveness. See the GitHub Privacy Statement for more details."
//      Expected Result:
//      The checkbox should be selected successfully

// 11.  Click the "Subscribe" button
//      Expected Result:
//      The newsletter subscription should be submitted successfully

// 12.  Verify that the header "Thanks for subscribing" is visible
//      Expected Result:
//      The header "Thanks for subscribing" should be visible






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







// Test Case 5: Verify Pricing Page Features

// 1.   Open "https://github.com/"
//      Expected Result:
//      The homepage should load successfully

// 2.   Click the "Pricing" link in the header
//      Expected Result:
//      The Pricing page should load successfully

// 3.   Verify that the header "Try the Copilot-powered platform" is visible
//      Expected Result:
//      The header "Try the Copilot-powered platform" should be visible

// 4.   Scroll to the "Compare all features" section
//      Expected Result:
//      The "Compare all features" section should be visible

// 5.   Click the "Compare all features" link
//      Expected Result:
//      The Compare Features page or section should load successfully

// 6.   Verify that the header "Compare features" is visible
//      Expected Result:
//      The header "Compare features" should be visible

