import { detectCardSystem } from '../js/card';

describe('Definition payment system', () => {
    test('Visa (4)', () => {
        expect(detectCardSystem('4582166105753724')).toBe('visa');
    });

    test('Mastercard (51-55)', () => {
        expect(detectCardSystem('5115757851767877')).toBe('mastercard');
    });

    test('Mastercard (2221-2720)', () => {
        expect(detectCardSystem('2720995452317791')).toBe('mastercard');
    });

    test('American Express (34,37)', () => {
        expect(detectCardSystem('372259703604712')).toBe('amex');
    });

    test('Discover (6011)', () => {
        expect(detectCardSystem('6011096557950120')).toBe('discover');
    });

    test('JCB (3528-3589)', () => {
        expect(detectCardSystem('3545308710158745')).toBe('jcb');
    });

    test('Diners Club (Carte Blanche 300-305)', () => {
        expect(detectCardSystem('30100981697453')).toBe('diners');
    });

    test('Diners Club (International 36)', () => {
        expect(detectCardSystem('36276319672485')).toBe('diners');
    });

    test('Mir (2)', () => {
        expect(detectCardSystem('2200000000000004')).toBe('mir');
    });

    test('Unknown payment system', () => {
        expect(detectCardSystem('1234567890123456')).toBe('unknown');
    });
});