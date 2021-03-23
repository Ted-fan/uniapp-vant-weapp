import { request } from '@/utils/request'
import { WX_APP_URL } from "@/utils/constants"

// 获取用户信息
export function getUserInfoApi(data) {
  return request({
    url: WX_APP_URL + "/xxxx",
    method: "post",
    data: data
  });
}
