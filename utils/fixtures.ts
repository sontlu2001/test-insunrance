import { test as baseTest, expect as baseExpect } from '@playwright/test';

import { CarQuotePage } from '@/pages/car/carQuote.page';
import { CarPlanPage } from '@/pages/car/carPlan.page';
import { CarAddonPage } from '@/pages/car/carAddon.page';
import { CarReviewPage } from '@/pages/car/carReview.page';
import { CarPaymentResultPage } from '@/pages/car/carPaymentResult.page';

import { MaidQuotePage } from '@/pages/maid/maidQuote.page';
import { MaidPlanPage } from '@/pages/maid/maidPlan.page';
import { MaidAddonPage } from '@/pages/maid/maidAddon.page';
import { MaidReviewPage } from '@/pages/maid/maidReview.page';
import { MaidPaymentResultPage } from '@/pages/maid/maidPaymentResult.page';

type CustomFixtures = {
    carQuotePage: CarQuotePage;
    carPlanPage: CarPlanPage;
    carAddonPage: CarAddonPage;
    carReviewPage: CarReviewPage;
    carPaymentResultPage: CarPaymentResultPage;
    
    maidQuotePage: MaidQuotePage;
    maidPlanPage: MaidPlanPage;
    maidAddonPage: MaidAddonPage;
    maidReviewPage: MaidReviewPage;
    maidPaymentResultPage: MaidPaymentResultPage;
};

export const test = baseTest.extend<CustomFixtures>({
    // Car Pages
    carQuotePage: async ({ page }, use) => {
        await use(new CarQuotePage(page));
    },
    carPlanPage: async ({ page }, use) => {
        await use(new CarPlanPage(page));
    },
    carAddonPage: async ({ page }, use) => {
        await use(new CarAddonPage(page));
    },
    carReviewPage: async ({ page }, use) => {
        await use(new CarReviewPage(page));
    },
    carPaymentResultPage: async ({ page }, use) => {
        await use(new CarPaymentResultPage(page));
    },

    // Maid Pages
    maidQuotePage: async ({ page }, use) => {
        await use(new MaidQuotePage(page));
    },
    maidPlanPage: async ({ page }, use) => {
        await use(new MaidPlanPage(page));
    },
    maidAddonPage: async ({ page }, use) => {
        await use(new MaidAddonPage(page));
    },
    maidReviewPage: async ({ page }, use) => {
        await use(new MaidReviewPage(page));
    },
    maidPaymentResultPage: async ({ page }, use) => {
        await use(new MaidPaymentResultPage(page));
    }
});

export const expect = baseExpect;
