export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()

    if (!user.vaule && to.path === '/blog') {
        navigateTo('/login')
        
    } else if (!user.value && to.path === '/profile') {
        navigateTo('/login')
    } else if (user.value && to.path === '/login') {
        navigateTo('/profile')
    }
})