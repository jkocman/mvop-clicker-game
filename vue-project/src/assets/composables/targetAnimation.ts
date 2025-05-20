import { useItemsStore } from "@/stores/shopItems";

export function useTargetAnimation(wrapper: any, target: any, bodypart: any) {
    let position = 0;
    let direction = 1;
    let lastUpdate = performance.now();

    const baseSpeed = 8;
    const slowdownPerUpgrade = 2;
    //https://chatgpt.com/share/67e6b5cd-18c8-8011-8cf4-f1a2fad6ee72
    const frameTime = 1000 / 60;

    const animateTarget = () => {
        const now = performance.now();
        if (now - lastUpdate < frameTime) {
            requestAnimationFrame(animateTarget);
            return;
        }
        lastUpdate = now;

        const itemsStore = useItemsStore();

        const containerHeight = wrapper.value.clientHeight;
        const targetHeight = target.value.clientHeight;
        const maxPosition = containerHeight - targetHeight;
        let speed = (baseSpeed * containerHeight) / 500;

        const headSlowdownUpgrade = itemsStore.items.find(item => item.label === "Head Slowdown")?.count || 0;
        const slowdownSpeed = Math.max(speed - headSlowdownUpgrade * slowdownPerUpgrade, 0.5);

        const bounds = [
            containerHeight * 0.10,
            containerHeight * 0.20,
            containerHeight * 0.55 
        ];

        let currentSpeed = speed;

        if (position >= 0 && position <= bounds[0]) {
            bodypart.value = "head";
            currentSpeed = slowdownSpeed;
        } else if (position >= bounds[0] && position <= bounds[1]) {
            bodypart.value = "torso";
        } else if (position >= bounds[1] && position <= bounds[2]) {
            bodypart.value = "stomach";
        } else if (position > bounds[2]) {
            bodypart.value = "legs";
        }

        position += direction * currentSpeed;
        if (position <= 0 || position >= maxPosition) {
            direction *= -1;
        }
        if(position <= -1 ){
            position = 0;
        }
        if(position >= maxPosition + 1 ){
            position = maxPosition;
        }

        target.value.style.transform = `translate(-50%, ${position}px)`;
        requestAnimationFrame(animateTarget);
    };

    return { animateTarget };
}
