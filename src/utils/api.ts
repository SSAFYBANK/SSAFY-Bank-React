/* Import */
import { AxiosResponse } from "axios";
import { ResponseFuncType } from "@customTypes/ResponseFuncType";

// ----------------------------------------------------------------------------------------------------

/* API Response Process Function */
async function processApiResponse(
    { responseFunc }: { responseFunc: ResponseFuncType },
    { response }: { response: AxiosResponse },
) {
    // Process the Case No Data in Response
    if (!response || !("data" in response)) return;

    // Execute Response Function According to Status Code
    Object.entries(responseFunc).forEach(([curStatusCode, func]) => {
        if (+curStatusCode === response.data.statusCode || +curStatusCode === response.status)
            func(response);
    });
}

// ----------------------------------------------------------------------------------------------------

/* Export */
export default processApiResponse;
