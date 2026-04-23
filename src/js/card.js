export function detectCardSystem(cardNumber) {
    const clean = cardNumber.replace(/\s/g, '');
    
    if (!clean) return 'unknown';
    
    if (clean[0] === '4') return 'visa';
    
    const firstTwo = clean.slice(0, 2);
    const firstFour = clean.slice(0, 4);
    
    if ((firstTwo >= '51' && firstTwo <= '55') || (firstFour >= '2221' && firstFour <= '2720')) {
        return 'mastercard';
    }
    
    if (clean[0] === '2') return 'mir';
    
    if (clean.startsWith('34') || clean.startsWith('37')) return 'amex';
    
    if (clean.startsWith('6011') || clean.startsWith('65') || (clean.slice(0, 3) >= '644' && clean.slice(0, 3) <= '649')) {
        return 'discover';
    }
    
    const firstFourJCB = clean.slice(0, 4);
    if (firstFourJCB >= '3528' && firstFourJCB <= '3589') return 'jcb';
    
    const firstThree = clean.slice(0, 3);
    if ((firstThree >= '300' && firstThree <= '305') || clean.startsWith('36') || clean.startsWith('38')) {
        return 'diners';
    }
    
    return 'unknown';
}