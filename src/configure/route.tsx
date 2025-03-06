import Home from '@views/home';
import React from 'react';
import { RouteObject } from 'react-router-dom';

const RouterChildrenConfigs: Array<RouteObject> = [
  {
    index: true,
    element: <Home />,
  },
];

const RouterConfig = [
  {
    path: '/',
    // 处理边界溢出，无效地址
    children: RouterChildrenConfigs,
  },
];

export { RouterChildrenConfigs };

export default RouterConfig;
