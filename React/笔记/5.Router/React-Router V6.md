# 一、关于书写方面
路由注册的时候由的Switch改为了Routes
```jsx
//V5版本
 import {Route, Switch} from 'react-router-dom';
 
<div>
    <Switch>
        ......
        ......
    </Switch>
 </div>
//V6版本
 import {Route, Routes } from 'react-router-dom';
 
<div>
    <Routes >
        ......
        ......
    </Routes>
 </div>
 ```

 不用Route标签包裹子组件，可以直接使用element属性，并且不需要exact来表示精准匹配，V6版本内部算法改变，它默认就是匹配完整路径，先后顺序不再重要，它能够自动找出最优匹配路径

 ```jsx
 //V5版本 
import {Route, Switch} from 'react-router-dom';
 
<div>
    <Switch>
        <Route exact  path="/">
            <Home />
        </Route>
    </Switch>
 </div>
//V6的版本
import {Route, Routes } from 'react-router-dom';
 
<div>
    <Routes >
        <Route path="/" element={<Home />} />
    </Routes>
 
 </div>
 ```

 将Redirect改为Navigate
 ```jsx
 //路由配置中
//V5代码如下
import { Redirect } from 'react-router-dom';
<Redirect to="/home" />
//V6如下
import { Navigate } from 'react-router-dom';
<Route path="/" element ={<Navigate replace to="/home" />} />

//组件内部
//V5版本
import { Redirect } from 'react-router-dom';
//重定向到首页
return <Redirect to="/" />

//V6版本
import { Navigate } from 'react-router-dom';
//重定向到首页
return <Navigate to="/" />
```

用useNavigate替代useHistory使用
```jsx
import {useNavigate} from 'react-router-dom';
const navigate = useNavigate();
//如去首页
navigate("/home");
//还可使用
navigate(-1);  //后退到前一页
navigate(-2); //后退到前两页的前一页， 
navigate(1); //前向导航 等等依此类推
```

# 二、路由的嵌套方面优化

使用 Outlet 组件，此组件是一个占位符，告诉 React Router 嵌套的内容应该放到哪里。

```jsx
//路由中
<Routes>
  <Route path='/user/*'  element={<User />} 
   	    <Route path='user-item' element={<div>我是嵌套子项</div>} />
  <Route/>
</Routes>

//User组件中
import {Outlet} from 'react-router-dom';
const User = () => {
	return 
	<section>
	  <h1>我是外容器</h1>
	  <Outlet />
	</section>
}
export default User;
```

# 三、关于路由的灵活配置化

可以通过API useRoutes读取一个路由配置数组，生成相应的路由组件列表,来实现路由配置化，

并且可以在路由配置中带 meta属性，增加其他配置化信息，如路由图标，是否需要登录等其他信息

```jsx
import { useRoutes } from 'react-router-dom';
export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                meta: {
                    title: '首页',
                    icon: <DashboardOutlined />,
                },
                children: [
                    {
                        path: 'application',
                        element: <Application />,
                        meta: {
                            title: '应用',
                        }
                    }
                ]
            },
            {
                path: 'setting',
                element: <Setting />,
                meta: {
                    title: '设置',
                    icon: <UserOutlined />,   //图表名称
                }
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
        meta: {
            title: '登录',
            noLogin: true,
            hideMenu: true
        }
    },
    {
        path: '*',
        element: <Page404 />,
        meta: {
            title: '404',
            noLogin: true,
            hideMenu: true
        }
    },
];
const Routes = () => (
    useRoutes(routes)
)
export default Routes;
```
# 四、关于路由鉴权方面
此处就不过多的概述，只是做个简单的登录校验的实例，每个项目的关于鉴权方式都不一样，可以结合上方第三点中 meta信息去自行实现，

```jsx
const onRouteBefore = ({ pathname, meta }) => {
  // 动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title
  }
  // 判断未登录跳转登录页
  if (!meta.noLogin) {
    if (!isLogin) {
      return '/login'
    }
  }
}
```