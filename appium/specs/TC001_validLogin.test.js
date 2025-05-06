describe('Mobile Web Login - Valid', () => {
  it('should login with valid credentials', async () => {
    await browser.url('https://automationexercise.com');
    await $('=Signup / Login').click();

    await $('input[data-qa="login-email"]').setValue('96malikdavis@gmail.com');
    await $('input[data-qa="login-password"]').setValue('malikdavisqa');
    await $('button[data-qa="login-button"]').click();

    // Wait and check if logout button appears (means login was successful)
    const logoutLink = await $('=Logout');
    await logoutLink.waitForDisplayed({ timeout: 10000 });

    // Take screenshot
    await browser.saveScreenshot('./screenshots/valid_login_pass.png');
  });
});
