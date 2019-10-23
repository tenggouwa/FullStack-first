import loadableHandler from '@/components/loadableHandler'

module.exports = [{
    path: '/',
    exact: true,
    component: loadableHandler(() => import('./pages/login'))
}, {
    path: '/register',
    component: loadableHandler(() => import('./pages/register'))
}, {
    path: '/main',
    component: loadableHandler(() => import('./pages/main')),
    routes: [
        {
            path: '/main/markdown',
            component: loadableHandler(() => import('./pages/main/markdown'))
        }
    ]
}]
