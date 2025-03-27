import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useScoreStore = defineStore('score', () => {
  const totalScore = ref(0);
  const maxScore = ref(0);

  const addPoints = (points: number) => {
    totalScore.value += points;
    if (totalScore.value > maxScore.value) {
      maxScore.value = totalScore.value;
    }
  }
  const resetScore = () => {
    totalScore.value = 0;
  }

  return {totalScore, maxScore, addPoints, resetScore};
})