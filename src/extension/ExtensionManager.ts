import { Extension } from "./Extension";


export class ExtensionManager {

    static extensions = [] as Extension[];

    static register(extension : Extension) {
        this.extensions.push(extension);
    }

    static init() {
        // TODO: this should just register them
        // with snap to be loaded
        this.extensions.forEach(e => {
            e.init();
        });
    }
}