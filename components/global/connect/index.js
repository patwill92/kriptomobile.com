import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'

const HOC = (component, {getter, action}) => {
  return Vue.component('HOC', {
    render(h) {
      return h(component, {
        props: {
          getter: this.getter,
          action: this.action
        }
      })
    },
    computed: {
      ...mapGetters({
        getter
      })
    },
    methods: {
      ...mapActions({
        action
      })
    }
  })
};

export default HOC

