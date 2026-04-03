import { CarQuoteData } from "@/types/car-quote-data";
import dayjs from 'dayjs';

export const carQuoteData_001: CarQuoteData = {
    email: 'sondo1@cqtdt.asia',
    phoneNumber: '88888888',
    dateOfBirth: '2000-01-01',
    vehicleMake: 'AUDI',
    vehicleModel: 'A1 1.0',
    registrationYear: '2020',
    vehicleFinance: 'DBS BANK LTD',
    drivingExperiences: '5',
    ncd: '0%',
    numberOfClaims: '0',
    policyStartDate: dayjs().format('YYYY-MM-DD'),
};




export const maidQuoteData = {
    maidName: 'MARIA',
    passport: 'E1234567'
};
