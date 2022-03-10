import axios, {AxiosError} from "axios";
import { Methods } from "../types/types";

const createMutation =
(route: string, method: Methods = "POST") =>
        (body: any, headers = {}) =>
            axios("", {
                data: body, method, headers: {
                    ...headers,
                    Authorization: `Bearer token from async storage`
                }
            }).then(res => res.data).catch((e: AxiosError) => {
                if (e.response!.status < 400) {
                    if ((e.response as any)?.data?.message) {
                        return (e.response);
                    }
                }
                if ((e.response as any)?.data?.message) {
                    throw new Error((e.response as any)?.data?.message);
                }
                throw e;
            });