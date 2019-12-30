<template>
  <router-link class="achievement-link" :to="{ name: 'achievement-show', params: { id: '1'} }">
    <div class="achievement-card -shadow">
      <span class="eyebrow">Session: {{achievement.session}}</span>
      <h4 class="student">{{ achievement.student }}</h4>
      <span>{{ achievement.gradcodes.length }} graduation codes satisfied</span>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      achievement: {
        id: 1,
        student: "Joe Student",
        course: "English 12",
        session: "Fall 2019",
        grade: "A",
        gradcodes: [
          { id: "1", description: "Language Arts 12" },
          { id: "17", description: "Grade 12 Electives" }
        ]
      }
    };
  }
};
</script>

<style scoped>
.achievement-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.achievement-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.achievement-card > .student {
  margin: 0;
}

.achievement-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
