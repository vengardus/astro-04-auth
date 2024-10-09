import type { ResponseAction } from "@/interfaces/app/response.interface"
import { initResponseAction } from "@/utils/init-response";

export const getEnv_ = async (key:string):Promise<ResponseAction> => {
    const resp = initResponseAction();
    console.log('get-key', key)
    const value = import.meta.env[key]?? ''
    console.log('value-key', import.meta.env.FIREBASE_API_KEY)
    resp.success = true
    resp.data = value

    return resp
}