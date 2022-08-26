import { Suspense } from 'react'
import type { RouteObject } from 'react-router-dom'

import NotFound from '../components/NotFound'
import Home from '../pages/Home'
import Redirect from './Redirect'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: lazyLoad('Login'),
  },
  {
    path: '/center',
    element: <AuthComponent>{lazyLoad('Center')}</AuthComponent>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

function lazyLoad(path: string) {
  const LazyComponent = lazy(
    () => import(/* @vite-ignore */ `../pages/${path}.tsx`)
  )
  return (
    <Suspense fallback={<>加载中...</>}>
      <LazyComponent />
    </Suspense>
  )
}

// 路由权限
function AuthComponent({ children }: { children: JSX.Element }) {
  const token = sessionStorage.getItem('token')
  return token ? children : <Redirect to="/login" />
}

function Router() {
  const Routes = useRoutes(routes)
  return Routes
}
export default Router
