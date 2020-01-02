import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: { pen: 'PEN123', name: 'Joe Learner' },
    gradcodes: [
      {
        "id": "1",
        "description": "Language Arts 12"
      },
      {
        "id": "14",
        "description": "Grade 12 Non-Electives"
      }
    ]
  },
  getters: {
    gradcodesLength: state => state.gradcodes.length,
    getGradCodeById: state => id => state.gradcodes.find(gradcode => gradcode.id === id)
  },
  mutations: {},
  actions: {},
  modules: {}
});
