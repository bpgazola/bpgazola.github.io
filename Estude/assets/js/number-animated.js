// efeito animação números
const counters = document.querySelectorAll('.number');
const speed = 10000;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-target');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 20);
        } else {
            counter.innerText = value;
        }

    }
    animate();
});