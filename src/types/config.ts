/*
 * @Author: 杨宏旋
 * @Date: 2021-05-13 10:42:57
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-17 11:49:08
 * @Description:
 */
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string
  // Service interface url
  VITE_GLOB_API_URL: string
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string
}
export interface GlobConfig {
  // Site title
  title: string
  // Service interface url
  apiUrl: string
  // Upload url
  uploadUrl?: string
  //  Service interface url prefix
  urlPrefix?: string
  // Project abbreviation
  shortName: string
}
