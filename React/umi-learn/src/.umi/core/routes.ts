// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/admin/Desktop/React/umi-learn/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.jsx').default,
    "routes": [
      {
        "path": "/counter",
        "exact": true,
        "component": require('@/pages/counter.jsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.jsx').default,
        "wrappers": [require('@/wrappers/HandleTitle.js').default],
        "title": "首页"
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('@/pages/login.jsx').default,
        "wrappers": [require('@/wrappers/HandleTitle.js').default],
        "title": "登录"
      },
      {
        "path": "/welcome",
        "exact": true,
        "component": require('@/pages/welcome.jsx').default,
        "wrappers": [require('@/wrappers/PrivateRouter.js').default, require('@/wrappers/HandleTitle.js').default],
        "title": "欢迎"
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
