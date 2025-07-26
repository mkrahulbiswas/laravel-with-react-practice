import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { TestAndImplement } from "./component/TestAndImplement/TestAndImplement";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <VariousPackagesUse /> */}
        {/* <ReactLearnOneApp /> */}
        {/* <ReactLearnTwoApp /> */}
        <TestAndImplement />
    </StrictMode>
);
