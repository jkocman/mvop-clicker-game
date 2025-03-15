export function useTargetAnimation(wrapper: any, target: any, bodypart: any) {
    let position = 0;
    let direction = 1;
    const speed = 3;

    const animateTarget = () => {
        if (!wrapper.value || !target.value) return;

        const containerHeight = wrapper.value.clientHeight;
        const targetHeight = target.value.clientHeight;
        const maxPosition = containerHeight - targetHeight;

        position += direction * speed;
        if (position <= 0 || position >= maxPosition) {
            direction *= -1;
        }

        const bounds = [
            containerHeight * 0.10,
            containerHeight * 0.20,
            containerHeight * 0.55
        ];

        if (position >= 0 && position <= bounds[0]) {
            bodypart.value = "head";
        } else if (position >= bounds[0] && position <= bounds[1]) {
            bodypart.value = "torso";
        } else if (position >= bounds[1] && position <= bounds[2]) {
            bodypart.value = "stomach";
        } else if (position > bounds[2]) {
            bodypart.value = "legs";
        }

        target.value.style.transform = `translate(-50%, ${position}px)`;
        requestAnimationFrame(animateTarget);
    };

    return { animateTarget };
}