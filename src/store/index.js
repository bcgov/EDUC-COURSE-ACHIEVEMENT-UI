import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: { pen: 'PEN123', name: 'Joe Learner' },
    courses: [
      'English 10',
      'English 11',
      'English 12',
      'Math 10',
      'Math 11',
      'Math 12'
    ],
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
