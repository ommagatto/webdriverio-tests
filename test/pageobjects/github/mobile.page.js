class GitHubMobilePage {

    get downloadForiOS() { return $('//*[@id="_R_il5_"]/section/div[1]/div/div/div/section/a[1]') }
    get downloadForAndroid() { return $('//*[@id="_R_il5_"]/section/div[1]/div/div/div/section/a[2]') }


    // iOS
    async clickDownloadForiOSButton() {
        await this.downloadForiOS.click()
    }

    async verifyDownloadForiOSButtonIsDisplayed() {
        await expect(this.downloadForiOS).toBeDisplayed()
    }

    async verifyDownloadForiOSButtonIsEnabled() {
        await expect(this.downloadForiOS).toBeEnabled()
    }

    // Android
    async clickDownloadForAndroidButton() {
        await this.downloadForAndroid.click()
    }

    async verifyDownloadForAndroidButtonIsDisplayed() {
        await expect(this.downloadForAndroid).toBeDisplayed()
    }

    async verifyDownloadForAndroidButtonIsEnabled() {
        await expect(this.downloadForAndroid).toBeEnabled()
    }

};

export default new GitHubMobilePage()
