import { Router } from 'vue-router'
import LayoutContainer from '@/views/layouts/base/LayoutContainer.vue'

const createDefaultRouter = (router: Router): void => {
    router.addRoute({
        path: '/',
        name: 'home',
        redirect: '/dashboard',
        component: LayoutContainer,
        children: [
            {
                name: 'dashboard',
                path: 'dashboard',
                component: () => import('@/views/pages/dashboard/DashboardHome.vue')
            },
            {
                name: 'card',
                path: 'card',
                component: () => import('@/views/pages/card/CardHome.vue')
            }
        ]
    })
    createHttpRouter(router)
    createUserRouter(router)
    createFormRouter(router)
}

/**
 * Create an HTTP router with a route for common errors.
 *
 * @param {Router} router - the router to add the route to
 * @return {void}
 */
const createHttpRouter = (router: Router): void => {
    router.addRoute({
        path: '/common',
        name: 'common',
        children: [
            {
                name: '404',
                path: '404',
                component: () => import('@/views/common/error/NotFound.vue')
            },
            {
                name: '403',
                path: '403',
                component: () => import('@/views/common/error/Forbidden.vue')
            }
        ]
    })
}

/**
 * Creates a user router.
 *
 * @param {Router} router - the router to add the user routes to
 * @return {void}
 */
const createUserRouter = (router: Router): void => {
    router.addRoute({
        path: '/user',
        name: 'user',
        children: [
            {
                name: 'forgot',
                path: 'forgot',
                children: [
                    {
                        name: 'password',
                        path: 'password',
                        component: () => import('@/views/pages/user/ForgotPassword.vue')
                    }
                ]
            }
        ]
    })
}

const createFormRouter = (router: Router): void => {
    router.addRoute({
        path: '/forms',
        name: 'form',
        component: LayoutContainer,
        children: [
            {
                name: 'basic',
                path: 'basic',
                component: () => import('@/views/pages/form/FormBasic.vue')
            },
            {
                name: 'withAction',
                path: 'withAction',
                component: () => import('@/views/pages/form/FormWithAction.vue')
            },
            {
                name: 'withSplitField',
                path: 'withSplitField',
                component: () => import('@/views/pages/form/FormWithSplitField.vue')
            },
            {
                name: 'withImage',
                path: 'withImage',
                component: () => import('@/views/pages/form/FormWithImage.vue')
            },
            {
                name: 'withThird',
                path: 'withThird',
                component: () => import('@/views/pages/form/FormWithThird.vue')
            },
            {
                name: 'withValidate',
                path: 'withValidate',
                component: () => import('@/views/pages/form/FormWithValidate.vue')
            }
        ]
    })
}

export {
    createDefaultRouter
}
