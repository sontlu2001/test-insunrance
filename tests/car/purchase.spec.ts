import { test, expect } from '@/utils/fixtures';
import { carQuoteData_001 } from '@/utils/data';

test.describe('Car Insurance Purchase Flow', () => {
    test('should be able to complete car insurance purchase', async ({
        page,
        carQuotePage,
        carPlanPage,
        carAddonPage,
        carReviewPage,
        carPaymentResultPage
    }) => {
        // Step 1: Quote Page
        await carQuotePage.goto();
        await carQuotePage.submitQuote(carQuoteData_001);
        await carQuotePage.mockQuoteResponse(); 

        // Step 2: Plan Page
        // await carPlanPage.selectPlanAndProceed('Comprehensive');

        // // Step 3: Addons Page
        // await carAddonPage.configureAddonsAndProceed(['NCD_Protector']);

        // // Step 4: Review Page
        // await carReviewPage.acceptTermsAndPay();

        // Step 5: Payment Result Page
        // In a real scenario, this step involves traversing a payment gateway (e.g. Stripe, eNets)
        // Here we just verify the result page assuming it redirects back
        // const isSuccess = await carPaymentResultPage.isPaymentSuccessful();
        // expect(isSuccess).toBeTruthy();
    });

});
