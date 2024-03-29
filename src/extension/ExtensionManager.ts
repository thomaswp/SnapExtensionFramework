import { Blocks } from "../blocks/BlockFactory";
import { DevMode } from "../dev/DevMode";
import { EventManager } from "../events/EventManager";
import { Extension } from "./Extension";


export class ExtensionManager {

    static readonly extensions = [] as Extension[];

    static readonly blocks = new Blocks.BlockFactory();
    static readonly events = new EventManager();
    static readonly devMode = new DevMode();

    static register(extension : Extension) {
        this.extensions.push(extension);
    }

    static init() {

        const configFn =    window['getSEFConfig'];
        if (!configFn) {
            console.warn(
                'No SEF config file: No extensions loaded. ' +
                'Please create libraries/sef-config.js.'
            );
            return;
        }

        const config = configFn();
        if (!config || !Array.isArray(config.extensions)) {
            console.warn(
                'Invalid sef-config.js file (no extensions property). ' +
                'Please see libraries/sef-config.example.js for an example.'
            );
            return;
        }

        this.loadExtensions(config.extensions);

        this.devMode.init();
    }

    private static initExtensions() {
        // TODO: Order based on dependencies
        // TODO: Load only when asked for, not always
        this.extensions.forEach(e => {
            e.init();
        });
    }

    private static loadExtensions(paths: string[]) {
        let toLoad = 0;
        paths.forEach(path => {
            toLoad++;
            this.loadExtension(path, success => {
                if (!success) {
                    console.warn('Extension not found:', path);
                }
                toLoad--;
                if (toLoad == 0) {
                    this.initExtensions();
                }
            });
        });
    }

    private static loadExtension(
        path: string,
        callback: (success: boolean) => void
    ) {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', path);
        // TODO: remove simulated lag
        script.addEventListener('load', () => callback(true));
        script.addEventListener('error', () => callback(false));
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}