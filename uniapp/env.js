/**
 *  Shopro全局配置文件 v1.3.9
 */  
export const BASE_URL =  "https://danke.shningmi.com" 
// export const BASE_RICHTEXT = 'https//danke.shningmi.com' //后台根域名 https//danke.shningmi.com
// export const BASE_URL = 'https://demo.shopro.top' //后台根域名 https//danke.shningmi.com
export const API_URL = `${BASE_URL}/addons/shopro/` //后台接口域名
// export const BASE_RICHTEXTS = `${BASE_RICHTEXT}/addons/shopro/` //后台接口域名
export const IMG_URL = 'http://file.shopro.top' //全局网络图片地址变量，css背景图片地址变量在uni.scss
export const MAP_KEY = '265849207*********39753dc'; //高德地图开发者Web服务key,逆坐标解析
export const HAS_LIVE = false //后台是否开通直播权限,根据情况在manifest.json中，开启注释相应组件的引入，pages.json中打开直播
