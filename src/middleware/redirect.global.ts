export default defineNuxtRouteMiddleware((to) => {
  // todolistにリダイレクトさせる（ログイン機能など必要な場合は別途調整が必要）
  if (to.path === '/') {
    return navigateTo('/todolist')
  }
})
