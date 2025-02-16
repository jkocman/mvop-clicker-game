document.addEventListener("DOMContentLoaded", () => {
    let target = document.querySelector(".target");
    let container = target.parentElement;
    let position = 0;
    let direction = 1;
    let speed = 3;

    function animateTarget() {
        let containerHeight = container.clientHeight;
        let targetHeight = target.clientHeight;
        let maxPosition = containerHeight - targetHeight;

        position += direction * speed;

        if (position <= 0 || position >= maxPosition) {
            direction *= -1;
        }

        target.style.transform = `translate(-50%, ${position}px)`;
        requestAnimationFrame(animateTarget);
    }

    animateTarget();
});
