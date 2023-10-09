import { ExtensionManager } from "../extension/ExtensionManager";
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

    init() {
        if (!this.isDevMode) {
            return;
        }

        let lastProject = localStorage.getItem(LAST_PROJECT_KEY);
        if (lastProject && lastProject.length > 0) {
            // TODO: Right now we set to 10ms to wait until after blocks are
            // loaded - should be a callback way to do it
            setTimeout(() => {
                Snap.IDE.loadProjectXML(lastProject);
                console.log("Loading last project", Snap.IDE.getProjectName());
            }, 500);
        }

        window.onbeforeunload = () => {};
        ExtensionManager.events.Trace.addGlobalListener((message) => {
            // Wait for next frame, since some edits occur after the log
            setTimeout(() => {
                let xml = Snap.IDE.getProjectXML();
                if (xml != this.lastProjectXML) {
                    this.lastProjectXML = xml;
                    localStorage.setItem(LAST_PROJECT_KEY, xml);
                    // console.log("Saved project after: " + message);
                }
            }, 0);
        });
    }

}