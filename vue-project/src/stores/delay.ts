import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useDelayStore = defineStore('delay', () => {
    const savedDelay = localStorage.getItem('delay');
    const savedLowByThis = localStorage.getItem('lowByThis');

    const delay : any = ref(savedDelay ? parseInt(savedDelay) : 1500);
    const lowByThis: any = ref(savedLowByThis ? parseInt(savedLowByThis) : 150);

    watch(delay, (newDelay) => {
        localStorage.setItem('delay', newDelay.toString());
    });

    watch(lowByThis, (newVal) => {
        localStorage.setItem('lowByThis', newVal.toString());
    });

    return { delay, lowByThis };
});
