import { APIResponse } from "./apiResponse";

export type ApiResponseData<T> = APIResponse & {
    data: T;
};