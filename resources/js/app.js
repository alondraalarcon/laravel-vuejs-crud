
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.VueAxios = require('vue-axios').default;
window.Axios = require('axios').default;
let applayout = require('./components/App.vue');

const ListInfo = Vue.component('ListInfo', require('./components/ListInfo.vue'));
const AddInfo = Vue.component('AddInfo', require('./components/AddInfo.vue'));
const ShowInfo = Vue.component('ShowInfo', require('./components/ShowInfo.vue'));
const EditInfo = Vue.component('EditInfo', require('./components/EditInfo.vue'));
const DeleteInfo = Vue.component('DeleteInfo', require('./components/DeleteInfo.vue'));

Vue.use(VueRouter, VueAxios, axios);

const routes = [
    {
        name: "ListInfo",
        path: "/",
        component: ListInfo
    },
    {
        name: "AddInfo",
        path: "/add-info",
        component: AddInfo
    },
    {
        name: "ShowInfo",
        path: "/show-info",
        component: ShowInfo
    },
    {
        name: "EditInfo",
        path: "/edit-info",
        component: EditInfo
    },
    {
        name: "DeleteInfo",
        path: "/delete-info",
        component: DeleteInfo
    }
];

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
const router = new VueRouter({ mode: "history", routes: routes });
new Vue(
    Vue.util.extend(
        { router },
        applayout
    )
).$mount('#app');
