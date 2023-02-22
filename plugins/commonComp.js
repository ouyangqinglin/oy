import { defineNuxtPlugin } from "nuxt/app"
import CommonFlex from '@comp/common/flex'
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component(CommonFlex.name, CommonFlex)
})