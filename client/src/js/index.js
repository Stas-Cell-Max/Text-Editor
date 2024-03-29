import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';
import './install.js';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();
if (editor.codeMirrorInstance) {
  editor.codeMirrorInstance.on('blur', () => {
      const content = editor.codeMirrorInstance.getValue();
      putDb(content); // Save the content to IndexedDB
      console.log('Content saved on blur');
  });
} else 

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
