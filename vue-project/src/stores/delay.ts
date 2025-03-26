import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDelayStore = defineStore('delay', () => {
    const delay = ref(2000);

    return { delay }
})