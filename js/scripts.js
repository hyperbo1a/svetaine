document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('converter-form');
    const resultDiv = document.getElementById('conversion-result');
    const exchangeRates = {
        EUR: { USD: 1.1, GBP: 0.85, JPY: 139.5, CNY: 7.5, RUB: 93.0, CHF: 1.05 },
        USD: { EUR: 0.91, GBP: 0.77, JPY: 126.8, CNY: 6.9, RUB: 84.5, CHF: 0.95 },
        GBP: { EUR: 1.18, USD: 1.3, JPY: 164.2, CNY: 8.7, RUB: 109.5, CHF: 1.24 },
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('from').value;
        const toCurrency = document.getElementById('to').value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Įveskite tinkamą sumą!';
            resultDiv.style.display = 'block';
            return;
        }

        if (fromCurrency === toCurrency) {
            resultDiv.textContent = 'Pasirinktos valiutos turi skirtis.';
            resultDiv.style.display = 'block';
            return;
        }

        const conversionRate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);
        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        resultDiv.style.display = 'block';
    });

    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    });

    updateCarousel();
});

function toggleMenu() {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
}
