/* Import */
import router from "@/router";
import styled from "@emotion/styled";
import { RouterProvider } from "react-router-dom";

// ----------------------------------------------------------------------------------------------------

/* App Component */
function App() {
    return (
        <MainContainer>
            <RouterProvider router={router} />
        </MainContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Style */
const MainContainer = styled("div")`
    width: 100%;
    height: 100%;
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default App;
