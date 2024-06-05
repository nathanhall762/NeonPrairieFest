import React from "react"
import { FireCMSCloudApp } from "@firecms/cloud";
import appConfig from "./index";

function App() {
    return <FireCMSCloudApp
        projectId={"neon-prairie-fest-e1lxz"}
        appConfig={appConfig}
    />;
}

export default App
