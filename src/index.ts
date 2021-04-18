import '~/node_modules/bulma/bulma.sass';
import '@babel/polyfill';
import App from './App.svelte';

new App({
  target: document.getElementById('main'),
  props: {}
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/' + 'sw.js');
    });
}