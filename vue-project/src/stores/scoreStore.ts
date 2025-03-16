import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => ({
    totalScore: 200000,
    maxScore: 0
  }),
  actions: {
    addPoints(points: number) {
      this.totalScore += points;
      if (this.totalScore > this.maxScore) {
        this.maxScore = this.totalScore;
      }
    },
    resetScore() {
      this.totalScore = 0;
    }
  }
})