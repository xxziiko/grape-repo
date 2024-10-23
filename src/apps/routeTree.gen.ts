/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PubImport } from './routes/_pub'
import { Route as AuthImport } from './routes/_auth'

// Create Virtual Routes

const PubIndexLazyImport = createFileRoute('/_pub/')()
const PubLoginIndexLazyImport = createFileRoute('/_pub/login/')()
const AuthChatIndexLazyImport = createFileRoute('/_auth/chat/')()
const AuthSettingsProfileSetupLazyImport = createFileRoute(
  '/_auth/settings/profile-setup',
)()
const AuthSettingsPasswordSettingsLazyImport = createFileRoute(
  '/_auth/settings/password-settings',
)()
const AuthSettingsDeleteAccountLazyImport = createFileRoute(
  '/_auth/settings/delete-account',
)()
const AuthLoginProfileSetupLazyImport = createFileRoute(
  '/_auth/login/profile-setup',
)()
const AuthChatChatIdLazyImport = createFileRoute('/_auth/chat/$chatId')()

// Create/Update Routes

const PubRoute = PubImport.update({
  id: '/_pub',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const PubIndexLazyRoute = PubIndexLazyImport.update({
  path: '/',
  getParentRoute: () => PubRoute,
} as any).lazy(() => import('./routes/_pub.index.lazy').then((d) => d.Route))

const PubLoginIndexLazyRoute = PubLoginIndexLazyImport.update({
  path: '/login/',
  getParentRoute: () => PubRoute,
} as any).lazy(() =>
  import('./routes/_pub.login.index.lazy').then((d) => d.Route),
)

const AuthChatIndexLazyRoute = AuthChatIndexLazyImport.update({
  path: '/chat/',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.chat.index.lazy').then((d) => d.Route),
)

const AuthSettingsProfileSetupLazyRoute =
  AuthSettingsProfileSetupLazyImport.update({
    path: '/settings/profile-setup',
    getParentRoute: () => AuthRoute,
  } as any).lazy(() =>
    import('./routes/_auth.settings.profile-setup.lazy').then((d) => d.Route),
  )

const AuthSettingsPasswordSettingsLazyRoute =
  AuthSettingsPasswordSettingsLazyImport.update({
    path: '/settings/password-settings',
    getParentRoute: () => AuthRoute,
  } as any).lazy(() =>
    import('./routes/_auth.settings.password-settings.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthSettingsDeleteAccountLazyRoute =
  AuthSettingsDeleteAccountLazyImport.update({
    path: '/settings/delete-account',
    getParentRoute: () => AuthRoute,
  } as any).lazy(() =>
    import('./routes/_auth.settings.delete-account.lazy').then((d) => d.Route),
  )

const AuthLoginProfileSetupLazyRoute = AuthLoginProfileSetupLazyImport.update({
  path: '/login/profile-setup',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.login.profile-setup.lazy').then((d) => d.Route),
)

const AuthChatChatIdLazyRoute = AuthChatChatIdLazyImport.update({
  path: '/chat/$chatId',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth.chat.$chatId.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_pub': {
      id: '/_pub'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PubImport
      parentRoute: typeof rootRoute
    }
    '/_pub/': {
      id: '/_pub/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof PubIndexLazyImport
      parentRoute: typeof PubImport
    }
    '/_auth/chat/$chatId': {
      id: '/_auth/chat/$chatId'
      path: '/chat/$chatId'
      fullPath: '/chat/$chatId'
      preLoaderRoute: typeof AuthChatChatIdLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/login/profile-setup': {
      id: '/_auth/login/profile-setup'
      path: '/login/profile-setup'
      fullPath: '/login/profile-setup'
      preLoaderRoute: typeof AuthLoginProfileSetupLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/settings/delete-account': {
      id: '/_auth/settings/delete-account'
      path: '/settings/delete-account'
      fullPath: '/settings/delete-account'
      preLoaderRoute: typeof AuthSettingsDeleteAccountLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/settings/password-settings': {
      id: '/_auth/settings/password-settings'
      path: '/settings/password-settings'
      fullPath: '/settings/password-settings'
      preLoaderRoute: typeof AuthSettingsPasswordSettingsLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/settings/profile-setup': {
      id: '/_auth/settings/profile-setup'
      path: '/settings/profile-setup'
      fullPath: '/settings/profile-setup'
      preLoaderRoute: typeof AuthSettingsProfileSetupLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/chat/': {
      id: '/_auth/chat/'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof AuthChatIndexLazyImport
      parentRoute: typeof AuthImport
    }
    '/_pub/login/': {
      id: '/_pub/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof PubLoginIndexLazyImport
      parentRoute: typeof PubImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AuthRoute: AuthRoute.addChildren({
    AuthChatChatIdLazyRoute,
    AuthLoginProfileSetupLazyRoute,
    AuthSettingsDeleteAccountLazyRoute,
    AuthSettingsPasswordSettingsLazyRoute,
    AuthSettingsProfileSetupLazyRoute,
    AuthChatIndexLazyRoute,
  }),
  PubRoute: PubRoute.addChildren({ PubIndexLazyRoute, PubLoginIndexLazyRoute }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_pub"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/chat/$chatId",
        "/_auth/login/profile-setup",
        "/_auth/settings/delete-account",
        "/_auth/settings/password-settings",
        "/_auth/settings/profile-setup",
        "/_auth/chat/"
      ]
    },
    "/_pub": {
      "filePath": "_pub.tsx",
      "children": [
        "/_pub/",
        "/_pub/login/"
      ]
    },
    "/_pub/": {
      "filePath": "_pub.index.lazy.tsx",
      "parent": "/_pub"
    },
    "/_auth/chat/$chatId": {
      "filePath": "_auth.chat.$chatId.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/login/profile-setup": {
      "filePath": "_auth.login.profile-setup.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/settings/delete-account": {
      "filePath": "_auth.settings.delete-account.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/settings/password-settings": {
      "filePath": "_auth.settings.password-settings.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/settings/profile-setup": {
      "filePath": "_auth.settings.profile-setup.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/chat/": {
      "filePath": "_auth.chat.index.lazy.tsx",
      "parent": "/_auth"
    },
    "/_pub/login/": {
      "filePath": "_pub.login.index.lazy.tsx",
      "parent": "/_pub"
    }
  }
}
ROUTE_MANIFEST_END */
