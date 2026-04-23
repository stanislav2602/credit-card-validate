export function isValidCardNumber(cardNumber) {
    const clean = cardNumber.replace(/\s/g, '');

    if (!/^\d+$/.test(clean)) {
        return false;
    }

    let sum = 0;
    let double = false;

    for (let i = clean.length -1; i >= 0; i--) {
        let digit = parseInt(clean[i], 10);

        if (double) {
            digit = digit * 2;
            if (digit > 9) {
                digit = digit - 9;
            }
        }

        sum = sum + digit;
        double = !double;
    }

    return sum % 10 === 0;
}