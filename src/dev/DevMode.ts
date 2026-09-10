import { Events } from "../events/SnapEvents";
import { ExtensionManager } from "../extension/ExtensionManager";
import { SpriteMorph } from "../snap/Snap";
import { Snap } from "../snap/SnapUtils";

const DEV_MODE_URLS = [
    "localhost",
    "127.0.0.1",
];

const DEV_MODE_URL_PARAM = "devMode";

const LAST_PROJECT_KEY = "lastProject";

export class DevMode {

    /**
     * If true, this means the user is running the editor locally or has
     * set the devMode URL parameter to true. When devMode is enabled,
     * the editor will automatically save the project to local storage
     * after every change and reload it on page load.
     */
    readonly isDevMode: boolean = false;
    private lastProjectXML: string;

    constructor() {
        this.isDevMode = DEV_MODE_URLS.some(url => window.location.href.includes(url));
        let params = new URLSearchParams(window.location.search);
        if (params.has(DEV_MODE_URL_PARAM)) {
            this.isDevMode = params.get(DEV_MODE_URL_PARAM) == "true";
        }
    }

    loadLastProject() {
        const lastProject = localStorage.getItem(LAST_PROJECT_KEY);
        if (!lastProject || lastProject.length == 0) {
            return;
        }
        Snap.IDE.loadProjectXML(lastProject);
        console.log("Loading last project", Snap.IDE.getProjectName());
    }

    saveProject() {
        setTimeout(() => {
            let xml = Snap.IDE.getProjectXML();
            if (xml != this.lastProjectXML) {
                this.lastProjectXML = xml;
                localStorage.setItem(LAST_PROJECT_KEY, xml);
            }
        }, 0);
    }

    init() {
        if (!this.isDevMode) {
            return;
        }

        this.loadLastProject();

        window.onbeforeunload = () => {};

        ExtensionManager.events.Trace.addGlobalListener(() => this.saveProject());
    }

}