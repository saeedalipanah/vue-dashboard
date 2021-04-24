import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
  

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#FFF",
                myColor: "#e91e63"
            }
        }
    },
});
