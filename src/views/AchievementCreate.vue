<template>
  <div>
    <h1>Create an achievement for {{ student.name }} with PEN: {{ student.pen }}</h1>
    <form>
      <label>Select a course</label>
      <select v-model="courses">
        <option v-for="course in courses" :key="course">{{ course }}</option>
      </select>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    gradcodesLength() {
      return this.$store.getters.gradcodesLength;
    },
    ...mapGetters(["getGradCodeById"]),
    ...mapState(["student", "courses", "gradcodes"])
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
