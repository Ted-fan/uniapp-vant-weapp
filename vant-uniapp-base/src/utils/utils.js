
import { request } from './request'
import { WX_APP_URL } from "./constants"

export function getOpenId(js_code) {
  return request({
    url: WX_APP_URL + `/api/WebPayWeChatM/GetMessageByCode`,
    method: "get",
    data: {
      js_code: js_code
    },
  });
}