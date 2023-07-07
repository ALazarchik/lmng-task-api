import { HTTP } from "../http/http";
import { config } from "../../config/config";
import _ from "lodash";
import { AxiosResponse } from "axios";
import { API_PATH } from "../../data/endpoints";
import { HEADERS } from "../../data/constants";
import { LoginUser } from "../http/interfaces";

class LmngService extends HTTP {
    constructor() {
        super({
            baseURL: config.baseUrl
        });
    }

    private static setAxiosConfig(params = {}) {
        const basicConfig = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        return _.merge(basicConfig, params);
    }

    public async postLogin(loginData: LoginUser): Promise<AxiosResponse> {
        const headers =
            {
                headers: {
                    "X-Auth-Device-Token": HEADERS["X-Auth-Device-Token"],
                    "Cookie": HEADERS.Cookie,
                }
            };
        return this.post(`${API_PATH.LOGIN}`, loginData, LmngService.setAxiosConfig(headers));
    }
}

export const lmngService = new LmngService();




