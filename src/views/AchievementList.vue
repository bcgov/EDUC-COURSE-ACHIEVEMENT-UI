<template>
  <div>
    <h2>List of Achievements</h2>
    <h2>To see achievements you must run 'npx json-server --watch course-achievement-db.json --port 3001'</h2>
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
