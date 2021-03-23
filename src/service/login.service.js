import { request } from '@/utils/request'
import { WX_APP_URL } from "@/utils/constants"

export function userLoginApi(data) {
  return request({
    url: WX_APP_URL + "/login",
    method: "post",
    data: data
  });
}
