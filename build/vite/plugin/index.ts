/*
 * @Author: 杨宏旋
 * @Date: 2021-05-13 10:05:41
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-19 12:53:40
 * @Description:
 */
import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import legacy from '@vitejs/plugin-legacy'

import PurgeIcons from 'vite-plugin-purge-icons'
import styleImport from 'vite-plugin-style-import'

import { configHtmlPlugin } from './html'
// import { configMockPlugin } from './mock'
import { configCompressPlugin } from './compress'
import { configStyleImportPlugin } from './styleImport'
// import { configVisualizerConfig } from './visualizer'
// import { configImageminPlugin } from './imagemin'
import { configWindiCssPlugin } from './windicss'
import { configSvgIconsPlugin } from './svgSprite'
import { configHmrPlugin } from './hmr'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    // VITE_USE_IMAGEMIN,
    // VITE_USE_MOCK,
    // VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          },
        },
      ],
    }),
  ]

  // TODO
  !isBuild && vitePlugins.push(configHmrPlugin())

  // @vitejs/plugin-legacy
  // VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  // vite-plugin-windicss
  vitePlugins.push(configWindiCssPlugin())

  // vite-plugin-mock
  // VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  // vite-plugin-purge-icons
  vitePlugins.push(PurgeIcons())

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild))

  // rollup-plugin-visualizer
  // vitePlugins.push(configVisualizerConfig())

  // The following plugins only work in the production environment
  if (isBuild) {
    //vite-plugin-imagemin
    // VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin())

    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(
        VITE_BUILD_COMPRESS,
        VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      )
    )

    // vite-plugin-pwa
    // vitePlugins.push(configPwaConfig(viteEnv))
  }

  return vitePlugins
}
