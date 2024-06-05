import type { FireCMSAppConfig } from "@firecms/cloud";
import { MusicianCollection } from "./collections/musicians";

const appConfig: FireCMSAppConfig = {
    version: "1",
    collections: [
        MusicianCollection
    ],
    propertyConfigs: [{
        name: "String with color",
        key: "color",
        property: {
            dataType: "string",
            name: "Main color",
            Preview: ({value}) => {
                return <div style={{
                    width: 20,
                        height: 20,
                        backgroundColor: value,
                        borderRadius: "4px",
                }}/>;
            },
        },
    }],
    entityViews: [
        {
            key: "sample_entity_view",
            name: "Sample entity view",
        }
    ]
}

export default appConfig;
