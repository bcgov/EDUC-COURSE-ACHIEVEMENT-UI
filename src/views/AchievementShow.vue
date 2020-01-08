<template>
  <div class="achievement-header">
    <span class="title">{{achievement.student}} </span>
    <h3 class="title">{{ achievement.course }}</h3>
    <h5>Session: {{achievement.school}} {{achievement.session}}</h5>
    <h5>Letter Grade: {{achievement.grade}}</h5>
    <ul>
      <li v-for="(gradcode, index) in achievement.gradcodes" :key="index" class="list-item">
        <b>Graduation code: #{{ gradcode.id }} {{gradcode.description}}</b>
      </li>
    </ul>
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
        // console.log('There was an error:', error.response)
      })
  }
};
</script>

<style scoped>
.location {
      margin-bottom: 0;
    }
    .location > .icon {
      margin-left: 10px;
    }
    .achievement-header > .title {
      margin: 0;
    }
    .list-group {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .list-group > .list-item {
      padding: 1em 0;
      border-bottom: solid 1px #e5e5e5;
    }
</style>
