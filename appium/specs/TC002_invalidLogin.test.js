import { expect } from 'chai';

describe('Mobile Web Login - Invalid', () => {
    it('should fail login with invalid credentials', async () => {
        await browser.url('https://automationexercise.com');
        await $('=Signup / Login').click();

        await $('input[data-qa="login-email"]').setValue('fakeuser@mail.com');
        await $('input[data-qa="login-password"]').setValue('wrongpass');
        await $('button[data-qa="login-button"]').click();

        const errorMessage = await $('p');
        const errorText = await errorMessage.getText();
        expect(errorText.toLowerCase()).to.include('incorrect');

        await browser.saveScreenshot('./screenshots/invalid_login_fail.png');
    });
});
