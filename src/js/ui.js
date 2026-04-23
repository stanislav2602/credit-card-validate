import { detectCardSystem } from './card';
import { isValidCardNumber } from './validator';

class UI {
    constructor() {
        this.input = null;
        this.button = null;
        this.message = null;
        this.icons = {};
    }
    
    init() {
        this.input = document.getElementById('cardNumber');
        this.button = document.getElementById('validateBtn');
        this.message = document.querySelector('.validation-message');
        
        const iconsList = document.querySelectorAll('.card-icon');
        for (let i = 0; i < iconsList.length; i++) {
            const icon = iconsList[i];
            const system = icon.dataset.system;
            this.icons[system] = icon;
        }
        
        this.input.addEventListener('input', (e) => this.onInput(e));
        this.button.addEventListener('click', () => this.onValidate());
        this.input.addEventListener('input', (e) => this.formatCard(e));
    }
    
    formatCard(e) {
        let value = e.target.value.replace(/\s/g, '');
        if (value.length > 16) value = value.slice(0, 16);
        
        let formatted = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) formatted += ' ';
            formatted += value[i];
        }
        e.target.value = formatted;
    }
    
    onInput(e) {
        const system = detectCardSystem(e.target.value);
        
        const keys = Object.keys(this.icons);
        for (let i = 0; i < keys.length; i++) {
            this.icons[keys[i]].classList.remove('active');
        }
        
        if (system !== 'unknown' && this.icons[system]) {
            this.icons[system].classList.add('active');
        }
        
        this.message.style.display = 'none';
    }
    
    onValidate() {
        const number = this.input.value;
        
        if (!number) {
            this.showResult(false, 'Enter number card');
            return;
        }
        
        this.showResult(isValidCardNumber(number));
    }
    
    showResult(isValid, customMsg) {
        this.message.style.display = 'block';
        
        if (isValid) {
            this.message.className = 'validation-message success';
            this.message.textContent = customMsg || 'Card number correct';
        } else {
            this.message.className = 'validation-message error';
            this.message.textContent = customMsg || 'Card number incorrect';
        }
    }
}

export default UI;