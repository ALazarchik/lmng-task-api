import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import _ from "lodash";
import * as AxiosLogger from "axios-logger";
import { GlobalLogConfig } from "axios-logger/lib/common/types";

export class HTTP {
    protected defaultConfig: AxiosRequestConfig;

    private readonly defaultLoggerConfig: GlobalLogConfig;

    public constructor(protected readonly axiosConfig?: AxiosRequestConfig) {
        this.defaultConfig = {
            ...axiosConfig
        };

        this.defaultLoggerConfig = {
            method: true,
            url: true,
            data: true,
            prefixText: false,
            dateFormat: false,
            status: true
        };

        AxiosLogger.setGlobalConfig(this.defaultLoggerConfig);
    }

    private async processor<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const axiosConfig: AxiosRequestConfig = _.merge({}, this.defaultConfig, config);
        try {
            const instance = axios.create();

            instance.interceptors.request.use((request) => AxiosLogger.requestLogger(request, { ...this.defaultLoggerConfig }), AxiosLogger.errorLogger);
            instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
            return await instance.request(axiosConfig);
        } catch (error) {
            return error.response ? error.response : error;
        }
    }

    protected async post<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.processor({ ...config, data, url, method: "POST" });
    }
}
