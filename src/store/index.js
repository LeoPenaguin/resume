import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    interests: null,
    experiences: null,
    degrees: null,
    description: null
  },
  mutations: {
    SET_INTEREST (state, interests) {
      state.interests = interests
    },
    SET_EXPERIENCE (state, experiences) {
      state.experiences = experiences
    },
    SET_DEGREES (state, degrees) {
      state.degrees = degrees
    },
    SET_DESCRIPTION (state, description) {
      state.description = description
    }
  },
  actions: {
    fetchData (context) {
      const headers = {'Cockpit-Token': '7b267847345fb46a498c0abd349cb8'}

      axios({
        method: 'post',
        url: 'https://cockpit.leopng.com/api/collections/get/Interests',
        headers
      }).then((response) => {
        context.commit('SET_INTEREST', response.data.entries)
      }).catch(function (error) {
        console.log(error)
      })

      axios({
        method: 'post',
        url: 'https://cockpit.leopng.com/api/collections/get/Experiences',
        data: {
          sort: {date_beginning: -1}
        },
        headers
      }).then((response) => {
        context.commit('SET_EXPERIENCE', response.data.entries)
      }).catch(function (error) {
        console.log(error)
      })

      axios({
        method: 'post',
        url: 'https://cockpit.leopng.com/api/singletons/get/Presentation',
        headers
      }).then((response) => {
        context.commit('SET_DESCRIPTION', response.data)
      }).catch(function (error) {
        console.log(error)
      })

      axios({
        method: 'post',
        url: 'https://cockpit.leopng.com/api/collections/get/School',
        data: {
          sort: {date_beginning: -1}
        },
        headers
      }).then((response) => {
        context.commit('SET_DEGREES', response.data.entries)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
})
