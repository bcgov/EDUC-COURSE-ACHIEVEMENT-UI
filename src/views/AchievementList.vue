<template>
  <div>
    <h2>List of Achievements</h2>
    <h6>To see achievements you must run 'npx json-server --watch db.json --port 3000'</h6>
    <CourseAchievement v-for="achievement in achievements" :key="achievement.id" :achievement="achievement" />
    <BaseIcon />
  </div>
</template>

<script>
import CourseAchievement from "@/components/CourseAchievement";
import AchievementService from '@/services/AchievementService.js';
export default {
  components: {
    CourseAchievement
  },
  data() {
    return {
      achievements: []
    };
  },
  created() {
    AchievementService.getAchievements()
      .then((response) => {
        this.achievements = response.data;
      })
      .catch((error) => {
        // console.log('There was an error:' + error.response);
      });
  }
};
</script>

<style></style>
