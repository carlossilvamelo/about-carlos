import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";
import colors from "vuetify/es5/util/colors";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pt },
    current: "pt"
  },
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: colors.indigo.base,
        secundary: colors.grey.base,
        danger: colors.red.base
      }
    }
  }
});
