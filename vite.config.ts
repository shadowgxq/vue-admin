import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `
                @import "${path.resolve(__dirname, 'src/assets/css/variables.less')}";
                `
            }
        }
    },
    plugins: [
        /**
         * 导入ElementPlus配置
         */
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        port: 5000,
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: "",
                changeOrigin: true,
                ws: true,
                rewrite(path) {
                    return path.replace(/^\/api/, "")
                },
            }
        }
    }
})
