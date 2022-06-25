import Index from 'pages/Index.vue'
import MainLayout from 'layouts/MainLayout.vue'
import NotePage from 'pages/NotePage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Index },
      { path: 'pages/NotePage', component: NotePage }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
