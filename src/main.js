/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/no-reserved-component-names */

import { createApp } from 'vue';

import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './assets/styles/layout.scss';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Divider from 'primevue/divider';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';

import VuePdfApp from 'vue3-pdf-app';
import 'vue3-pdf-app/dist/icons/main.css';

import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/rainbow.css';

import App from './App.vue';
import router from './router';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('python', python);

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });

app.component('Button', Button);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('Divider', Divider);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('VuePdfApp', VuePdfApp);

app.mount('#app');
