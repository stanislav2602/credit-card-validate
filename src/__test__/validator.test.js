import { isValidCardNumber } from '../js/validator';

describe('Valid numbers cards', () => {
    test('Visa', () => {
        expect(isValidCardNumber('4582166105753724')).toBe(true);
    });

    test('Mastercard', () => {
        expect(isValidCardNumber('5115757851767877')).toBe(true);
    });

    test('American Express', () => {
        expect(isValidCardNumber('372259703604712')).toBe(true);
    });

    test('Discover', () => {
        expect(isValidCardNumber('6011096557950120')).toBe(true);
    });

    test('JCB', () => {
        expect(isValidCardNumber('3545308710158745')).toBe(true);
    });

    test('Diners Club', () => {
        expect(isValidCardNumber('30100981697453')).toBe(true);
    });

    test('Mir', () => {
        expect(isValidCardNumber('2200000000000004')).toBe(true);
    });
});

describe('Invalid numbers cards', () => {
    test('Wrong number', () => {
        expect(isValidCardNumber('1234567890123456')).toBe(false);
    });

    test('Empty string', () => {
        expect(isValidCardNumber('')).toBe(false);
    });
});