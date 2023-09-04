/* Import */
import router from "@/router";
import styled from "@emotion/styled";
import { RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";

// ----------------------------------------------------------------------------------------------------

/* App Component */
function App() {
    return (
        <MainContainer>
            <RouterProvider router={router} />
            <Footer />
        </MainContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Style */
const MainContainer = styled("div")`
    width: 100%;
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default App;
