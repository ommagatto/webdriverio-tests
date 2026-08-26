class SearchPage {

    get resultsContainer() { return $('div[data-testid="results-list"]') }
    get resultsList() { return $$('div[data-testid="results-list"] > div[class*="Result-module__Result"]') }



    async checkResultsList(value) {
        // Wait for the results container to render before querying its children
        await this.resultsContainer.waitForExist({ timeout: 10000 });

        // Array of WebdriverIO elements
        const results = await this.resultsList

        // Sanity check there are results at all
        expect(results.length).toBeGreaterThan(0)

        for (const result of results) {
            if (await result.isDisplayed()) {

                await expect(results).toHaveText(value, {
                    containing: true,
                    ignoreCase: true,
                });
            };
        };
    };

}

export default new SearchPage();
