let deferredPrompt;

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // Update UI to notify the user they can add to home screen
    butInstall.style.display = 'block';

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
   
   butInstall.style.display = 'none';
   deferredPrompt.prompt();
   
   const { outcome } = await deferredPrompt.userChoice;
   console.log(`User response to the install prompt: ${outcome}`);
   deferredPrompt = null;

});
});
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed');
});
