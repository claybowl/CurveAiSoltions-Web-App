# PWA Plugin

The PWA plugin allows your app to be installed on a user's device

## Notifications

Register the trpc endpoints provided in this plugin into your application:

```tsx
Trpc.createRouter({
  // ...
  pwa: PwaServer.trpcRouter,
  // ...
})
```

Send a notification by calling the `sendNotification` trpc endpoint from your application:

```tsx
const { mutateAsync: sendNotification } = Api.pwa.sendNotification.useMutation()
```

### User Preferences

Allow your users to customize their notifications preferences by integrating the `Toggle` component from this plugin:

```tsx
<PwaClient.Toggle />
```
