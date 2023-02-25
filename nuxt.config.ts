// https://v3.nuxtjs.org/api/configuration/nuxt.config
const path = require('path')
import { loadEnv } from "vite"

interface VITE_ENV_CONFIG {
    VITE_API_HOST: string,
    VITE_API_PREFIX: string,
    VITE_PACK_ENV: string,
    VITE_PACK_URL: string
}

const envScript = process.env.npm_lifecycle_script.split(' ')
const envName = envScript[envScript.length - 1] // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG
console.log('当前环境：', envData)

export default defineNuxtConfig({
    publicRuntimeConfig: envData,
    pages: true,
    alias: {
        '@comp': path.resolve(__dirname, 'components'),
        '@assets': path.resolve(__dirname, 'assets'),
        '@img': path.resolve(__dirname, 'assets/image'),
    },
    app: {
        head: {
            script: [ { src: "/wow/wow.min.js", type: 'text/javascript' } ],
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: '一个前端的自渡' },
                { name: 'keywords', content: '一个前端的自渡' },
            ],
            link: [
                { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' },
            ],
            title: '楼南雨的个人网站'
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [
                        '@import "@/assets/css/_mixin.scss";',
                    ],
                },
            },

        },
    },
    css: [
        '~/assets/css/_presetClass.scss',
        'animate.css/animate.css',
        'element-plus/dist/index.css'
    ],
    postcss: {
        config: true
    },
    experimental: {
        writeEarlyHints: false
    }
    
})
