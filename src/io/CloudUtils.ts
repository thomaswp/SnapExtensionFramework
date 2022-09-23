import { Snap } from "../snap/SnapUtils";

export namespace Cloud {

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

    export type ProjectSaveBody = {
        notes: string,
        xml: string,
        media: string,
        thumbnail: string,
        remixID: string,
    }

    export class Utils {

        static async getCloudProjects(withThumbnail: boolean): Promise<CloudProject[]> {
            return new Promise((resolve, reject) => {
                Snap.cloud.getProjectList(dict => resolve(dict.projects), reject, withThumbnail);
            });
        }

        static async saveProject(projectName: string, body: ProjectSaveBody) : Promise<void> {
            return new Promise((resolve, reject) => {
                Snap.cloud.saveProject(projectName, body, resolve, reject);
            });
        }

        static async getPublicProject(projectName: string, userName: string) : Promise<string> {
            return new Promise((resolve, reject) => {
                Snap.cloud.getPublicProject(projectName, userName, resolve, reject);
            });
        }

        /**
         * @deprecated The cloud backend no longer supports this!
         */
        static async getProjectMetadata(projectName: string, userName: string) : Promise<string> {
            return new Promise((resolve, reject) => {
                Snap.cloud.getProjectMetadata(projectName, userName, resolve, reject);
            });
        }

        static async shareProject(projectName: string) : Promise<void> {
            return new Promise((resolve, reject) => {
                Snap.cloud.shareProject(projectName, Snap.cloud.userName, resolve, reject);
            });
        }

        // TODO: Project should have some sort of plugin permission system...
        static async deleteProject(projectName: string) : Promise<void> {
            return new Promise((resolve, reject) => {
                Snap.cloud.deleteProject(projectName, Snap.cloud.userName, resolve, reject);
            });
        }

        static getCurrentProjectData(verify: boolean) : ProjectSaveBody {
            let projectBody = Snap.IDE.buildProjectRequest();
            if (!Snap.IDE.verifyProject(projectBody)) return null;
            return projectBody;
        }

        static getCurrentProjectName() : string {
            return Snap.IDE.getProjectName();
        }

        static isLoggedIn() {
            return Snap.cloud.username != null;
        }

        static username() {
            return Snap.cloud.username;
        }

        static test() {
            this.getCloudProjects(false).then(projects => {
                console.log(projects[0].created);
            })
        }
    }
}
