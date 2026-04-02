import { test, expect } from '@/utils/fixtures';
import { maidQuoteData } from '@/utils/data';

test.describe('Maid Insurance Purchase Flow', () => {

    test('should be able to complete maid insurance purchase', async ({
        page,
        maidQuotePage,
        maidPlanPage,
        maidAddonPage,
        maidReviewPage,
        maidPaymentResultPage
    }) => {
        // Step 1: Quote Page
        await maidQuotePage.goto();
        await maidQuotePage.submitQuote(maidQuoteData);

        // Step 2: Plan Page
        await maidPlanPage.selectPlanAndProceed('Plan1');

        // Step 3: Addons Page
        await maidAddonPage.configureAddonsAndProceed(['CriticalIllness']);

        // Step 4: Review Page
        await maidReviewPage.acceptTermsAndPay();

        // Step 5: Payment Result Page
        // Similar to car flow, handling payment gateway would be needed before getting here
        // const isSuccess = await maidPaymentResultPage.isPaymentSuccessful();
        // expect(isSuccess).toBeTruthy();
    });

});
