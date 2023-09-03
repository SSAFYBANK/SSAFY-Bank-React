/* Import */
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------------------------------------

/* Router Hook */
interface Router {
    routeTo: (path: string) => void;
}

function useRouter(): Router {
    const navigate = useNavigate();
    const routeTo = useCallback(
        (path: string) => {
            navigate(path);
        },
        [navigate],
    );
    return { routeTo };
}

// ----------------------------------------------------------------------------------------------------

/* Export */
export default useRouter;
