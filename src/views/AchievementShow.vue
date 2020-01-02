<template>
  <div>
    <h1>Showing achievement {{ achievement.course }}</h1>
  </div>
</template>

<script>
import AchievementService from '@/services/AchievementService.js'
export default {
  props: ["id"],
  data() {
    return {
      achievement: {}
    }
  },
  created() {
    AchievementService.getAchievement(this.id)
      .then((response) => {
        this.achievement = response.data
      })
      .catch((error) => {
        console.log('There was an error:', error.response)
      })
  }
};
</script>

<style></style>
