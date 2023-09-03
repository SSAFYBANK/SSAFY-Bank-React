/* Import */
import instance from "@api/instance";
import processApiResponse from "@utils/api";
import { ApiProps } from "@customTypes/PropsTypes";

// ----------------------------------------------------------------------------------------------------

/* Get Entire Account List */
const getAccountList = async ({ responseFunc, data, routeTo }: ApiProps) => {
    try {
        const headers = {
            Authorization: sessionStorage.getItem("Authorization"),
        };
        const response = await instance.get(`/v1/account/getAccountList/${data.page}`, { headers });
        processApiResponse({ responseFunc, response });
        return response;
    } catch (e) {
        console.log("오류 발생!:" + e);
    }
};

/* Delete Account */
const deleteAccount = async ({ responseFunc, data, routeTo }) => {
    try {
        const { source, target, text } = data;
        const queryParams = {
            source,
            target,
            text,
        };
        const response = await instance.get(`/v1/account/getAccountList/0`);
        processApiResponse({ responseFunc, response });
        return response;
    } catch (e) {
        routeTo("/error");
        return e.response;
    }
};

/* Export */
export { getAccountList, deleteAccount };
