import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Precache static assets automatically injected by Webpack plugin
precacheAndRoute(self.__WB_MANIFEST);

// Example runtime caching rule for other requests
registerRoute(
  ({request}) => request.destination === 'image',
  new StaleWhileRevalidate()
);
