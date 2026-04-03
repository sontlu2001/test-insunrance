import { CarQuoteData } from './../../types/car-quote-data';
import { Page, Locator } from '@playwright/test';
import { BasePage } from '@/pages/BasePage';

export class CarQuotePage extends BasePage {
    readonly emailInput: Locator;
    readonly phoneNumber: Locator;
    readonly dateOfBirthInput: Locator;
    readonly vehicleMakeInput: Locator;
    readonly vehicleModelInput: Locator;
    readonly yearOfRegistrationInput: Locator;
    readonly vehicleFinanceInput: Locator;
    readonly yearsOfDrivingExperienceInput: Locator;
    readonly ncdInput: Locator;
    readonly numberOfClaimsInput: Locator;
    readonly policyStartDateInput: Locator;
    readonly policyEndDateInput: Locator;
    readonly btnGetQuote: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('input[name="quick_quote_email"]');
        this.phoneNumber = page.locator('input[name="quick_quote_mobile"]');
        this.dateOfBirthInput = page.locator('input[name="quick_quote_owner_dob"]');
        this.vehicleMakeInput = page.locator('input[name="quick_quote_make"]');
        this.vehicleModelInput = page.locator('input[name="quick_quote_model"]');
        this.yearOfRegistrationInput = page.locator('#quick_quote_reg_yyyy');
        this.vehicleFinanceInput = page.locator('input[name="quick_proposal_hire_purchase"]');
        this.yearsOfDrivingExperienceInput = page.locator('#quick_quote_owner_drv_exp');
        this.ncdInput = page.locator('#quick_quote_owner_ncd');
        this.numberOfClaimsInput = page.locator('#quick_quote_owner_no_of_claims');
        this.policyStartDateInput = page.locator('input[name="quick_proposal_start_date"]');
        this.policyEndDateInput = page.locator('input[name="quick_proposal_end_date"]');
        this.btnGetQuote = page.locator('button:has-text("Generate Quote")');
    }

    async goto() {
        await this.navigate('/motor/insurance/basic-detail?manual=true');
    }

    async submitQuote(quoteData: CarQuoteData) {
        if (quoteData.email) await this.fillText(this.emailInput, quoteData.email);
        if (quoteData.phoneNumber) await this.fillText(this.phoneNumber, quoteData.phoneNumber);
        if (quoteData.dateOfBirth) await this.fillDateValue(this.dateOfBirthInput, quoteData.dateOfBirth);
        if (quoteData.vehicleMake) await this.selectDropdown(this.vehicleMakeInput, quoteData.vehicleMake);
        if (quoteData.vehicleModel) await this.selectDropdown(this.vehicleModelInput, quoteData.vehicleModel);
        if (quoteData.registrationYear) await this.selectOption(this.yearOfRegistrationInput, quoteData.registrationYear);
        if (quoteData.vehicleFinance) await this.selectDropdown(this.vehicleFinanceInput, quoteData.vehicleFinance);
        if (quoteData.drivingExperiences) await this.fillText(this.yearsOfDrivingExperienceInput, quoteData.drivingExperiences);
        if (quoteData.ncd) await this.selectOption(this.ncdInput, quoteData.ncd);
        if (quoteData.numberOfClaims) await this.selectOption(this.numberOfClaimsInput, quoteData.numberOfClaims);
        if (quoteData.policyStartDate) await this.fillDateValue(this.policyStartDateInput, quoteData.policyStartDate);
        if (quoteData.policyEndDate) await this.fillDateValue(this.policyEndDateInput, quoteData.policyEndDate);
        await this.waitForPageStable();
        this.page.on('request', req => console.log('REQUEST POST:', req.url()));
        await this.clickElement(this.btnGetQuote);
        await this.waitForPageStable();
    }

    async mockQuoteResponse() {
        
    }
}
