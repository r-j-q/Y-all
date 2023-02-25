/**
 * @description 权限存储函数
 */
const authorizationKey = 'token'
 
export function getAuthorization() {
  return uni.getStorageSync(authorizationKey)
}
 