function updatePercentage() {
    const percentageInput = document.getElementById('percentage-input');
    const animateInput = document.getElementById('animate-input');
    
    const percentage = parseFloat(percentageInput.value);
    const shouldAnimate = animateInput.checked;

    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        alert('Porcentagem inválida. Insira um valor entre 0 e 100.');
        return;
    }

    updateMeter(percentage, shouldAnimate);
}

function updateMeter(percentage, shouldAnimate) {
    const circlePath = document.getElementById('circle-path');
    const backgroundCircle = document.getElementById('background-circle');
    const percentageText = document.getElementById('percentage-text');

    const circumference = 2 * Math.PI * circlePath.getAttribute('r');
    const dashOffset = circumference - (percentage / 100) * circumference;

    circlePath.style.strokeDasharray = circumference;
    circlePath.style.strokeDashoffset = shouldAnimate ? dashOffset : 0;

    backgroundCircle.style.strokeDasharray = circumference;
    backgroundCircle.style.strokeDashoffset = 0;

    percentageText.innerText = percentage + '%';
}

// Adiciona a classe 'animate' para acionar a animação de transição.
function triggerAnimation() {
    const circlePath = document.getElementById('circle-path');
    circlePath.classList.add('animate');
}

// Exemplo: Atualiza o medidor para 75% com animação.
updateMeter(75, true);
triggerAnimation();


