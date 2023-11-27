
import Vue from "vue";
import locale from 'element-ui/lib/locale'
import VueI18n from "vue-i18n";
import messages from "./langs";

Vue.use(VueI18n);

//lang存在vuex，有持久化
let vuex = JSON.parse(localStorage.vuex || '{}')

const i18n = new VueI18n({
  locale: vuex.lang || "en", //默认en
  messages
});

locale.i18n((key, value) => i18n.t(key, value))

export default i18n;