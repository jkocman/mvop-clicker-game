import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useAchievementsStore } from './achievments';

export const useScoreStore = defineStore('score', () => {
  const totalScore = ref(parseInt(localStorage.getItem('totalScore') || '0'));
  const maxScore = ref(parseInt(localStorage.getItem('maxScore') || '0'));

  const achievementsStore = useAchievementsStore();

  const addPoints = (points: number) => {
    totalScore.value += points;
    if (totalScore.value > maxScore.value) {
      maxScore.value = totalScore.value;
    }

  }
  const resetScore = () => {
    totalScore.value = 0;
  }

  watch(totalScore, (newScore) => {
    localStorage.setItem('totalScore', newScore.toString());

    if (newScore >= 100000) {
      achievementsStore.complete('100k XP');
    }
    if(newScore >= 2000000){
      achievementsStore.complete('2 Milion XP')
    }
  });

  watch(maxScore, (newMax) => {
    localStorage.setItem('maxScore', newMax.toString());
  });

  return {totalScore, maxScore, addPoints, resetScore};
})