<template>
  <div>
    <h1>Create an achievement for {{ student.name }}</h1>
    <p>This achievement was created by {{ student.pen }}</p>
    <p>There are {{ gradcodesLength }} graduation codes</p>
    <p>Graduation code: {{ getGradCodeById("1") }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    gradcodesLength() {
      return this.$store.getters.gradcodesLength
    },
    ...mapGetters(['getGradCodeById']),
    ...mapState(['student'])
  }
}
</script>

<style></style>
