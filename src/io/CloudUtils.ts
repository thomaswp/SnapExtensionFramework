import { Snap } from "../snap/SnapUtils";

export type CloudProject = {
    created: string,
    id: number,
    ispublic: boolean,
    ispublished: boolean,
    lastupdated: string,
    notes: string,
    projectname: string,
    username: string,
}

export class CloudUtils {

    static async getCloudProjects(withThumbnail: boolean): Promise<CloudProject[]> {
        return new Promise((resolve, reject) => {
            Snap.cloud.getProjectList(dict => resolve(dict.projects), reject, withThumbnail);
        });
    }

    static test() {
        this.getCloudProjects(false).then(projects => {
            console.log(projects[0].created);
        })
    }
}