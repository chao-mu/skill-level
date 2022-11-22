
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: {requiresAuth: true} },
      { path: 'auth', component: () => import('pages/AuthPage.vue') },
      {
        path: 'character',
        meta: {requiresAuth: true},
        component: () => import('layouts/CharacterSheetLayout.vue'),
        children: [
          { path: '', redirect: '/character/skills' },
          { path: 'quests', component: () => import('pages/QuestsPage.vue') },
          { path: 'skills', component: () => import('pages/SkillsPage.vue') },
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
