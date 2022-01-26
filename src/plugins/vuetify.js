import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import zhHans from 'vuetify/es5/locale/zh-Hans';

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3384e7'
            }
        }
    },
    lang: {
        locales: {
            zhHans: {
                ...zhHans,
                noDataText: '数据为空'
            }
        },
        current: 'zhHans'
    },
});
