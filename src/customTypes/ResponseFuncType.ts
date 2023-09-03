/* Import */
import { AxiosResponse } from "axios";

// ----------------------------------------------------------------------------------------------------

/* Export */
export type ResponseFuncType = {
    [statusCode: number]: (response?: AxiosResponse) => void;
};
