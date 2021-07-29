import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const config = { ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: config.BASE_URL,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      }
    },
    plugins: [
      vue(),
      ViteComponents({
        customComponentResolvers: [AntDesignVueResolver()]
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  })
}
