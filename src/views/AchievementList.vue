<template>
  <div>
    <h2>List of Achievements</h2>
    <CourseAchievement v-for="achievement in achievements" :key="achievement.id" :achievement="achievement"/>
    <BaseIcon />
  </div>
</template>

<script>
import CourseAchievement from "@/components/CourseAchievement";
import axios from "axios";
export default {
  components: {
    CourseAchievement
  },
  data() {
    return {
      achievements: []
    }
  },
  created() {
    axios
      .get("http://localhost:3000/achievements")
      .then((response) => {
        this.achievements = response.data;
      })
      .catch((error) => {
        console.log("There was an error:" + error.response);
      });
  }
};
</script>

<style></style>
