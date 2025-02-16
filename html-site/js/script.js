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

let toggleButtonUp = document.querySelector(".toggle-button-up");
let toggleButtonDown = document.querySelector(".toggle-button-down");
let toggleButtonSection = document.querySelector(".temporary-button");
let header = document.querySelector("header");


toggleButtonUp.addEventListener("click", () => {
    header.style.display = "none";
    toggleButtonSection.style.display = "flex";
});

toggleButtonDown.addEventListener("click", () => {
    header.style.display = "flex";
    toggleButtonSection.style.display = "none";
});
