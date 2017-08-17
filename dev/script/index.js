import Vue from 'vue';

import router from '../router';
import store from '../store/index';
import App from '../component/App.vue';

import '../style/example.less';

const aa = {
    name: 'zhangsan',
    sex: 'male',
};

const bb = {...aa};

console.log(bb);

const app = new Vue({
    router,
    store,
    components: {
        App,
    },
}).$mount('#app');
