import { useItemsStore } from "@/stores/shopItems";

export function useTargetAnimation(wrapper: any, target: any, bodypart: any) {
    let position = 0;
    let direction = 1;

    const baseSpeed = 3;
    const slowdownPerUpgrade = 0.25;

    const animateTarget = () => {
        
        const itemsStore = useItemsStore();
        const headSlowdownUpgrade = itemsStore.items.find(item => item.label === "Head Slowdown")?.count || 0;
        const slowdownSpeed = Math.max(baseSpeed - headSlowdownUpgrade * slowdownPerUpgrade, 0.5);

        const containerHeight = wrapper.value.clientHeight;
        const targetHeight = target.value.clientHeight;
        const maxPosition = containerHeight - targetHeight;

        const bounds = [
            containerHeight * 0.10,
            containerHeight * 0.20,
            containerHeight * 0.55 
        ];

        let currentSpeed = baseSpeed;
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

        target.value.style.transform = `translate(-50%, ${position}px)`;
        requestAnimationFrame(animateTarget);
    };

    return { animateTarget };
}
