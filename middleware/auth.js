export default defineNuxtRouteMiddleware((to, from) => {
    // 子路由跳转， 页面滚回顶部

   
    if (process.client) {
        console.log('to' , to)
        if(to.path.match(/product/)) {
           
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0

        }
       
    }
  })
