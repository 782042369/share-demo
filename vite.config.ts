/*
 * @Author: 杨宏旋
 * @Date: 2021-05-07 11:08:45
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-19 12:47:51
 * @Description:
 */
import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { resolve } from 'path'
import { wrapperEnv } from './build/utils'
import { createProxy } from './build/vite/proxy'
import { createVitePlugins } from './build/vite/plugin'
import { OUTPUT_DIR } from './build/constant'
import { generateModifyVars } from './build/generate/generateModifyVars'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv

  const isBuild = command === 'build'
  return {
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
    server: {
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY),
      host: true,
    },
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    resolve: {
      alias: {
        '@': pathResolve('src') + '/',
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
  }
}
