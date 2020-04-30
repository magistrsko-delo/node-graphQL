import {ConfigEnv} from "../config";
import {CutMediaType} from "../graph/schemas/MediaMetadata";

const axios = require('axios').default;

export class ProjectMediaManagerHttpClient {

    public async cutMedia(cutInput: CutMediaType): Promise <number> {
        return new Promise<number>(
            async (resolve, reject) => {
                try {
                    const response = await axios.post(ConfigEnv.getConfig().projectMediaManagerUrl + 'v1/project/' + cutInput.projectId + '/media/' + cutInput.mediaId + '/cut',
                        {
                            from: cutInput.from,
                            to: cutInput.to
                        });
                    return resolve(response.data.data.mediaId);
                } catch (exception) {
                    process.stderr.write(`ERROR received from ${ConfigEnv.getConfig().projectMediaManagerUrl + 'v1/project/' + cutInput.projectId + '/media/' + cutInput.mediaId + '/cut'}: ${exception}\n`);
                    return reject(`ERROR received from ${ConfigEnv.getConfig().projectMediaManagerUrl + 'v1/project/' + cutInput.projectId + '/media/' + cutInput.mediaId + '/cut'}: ${exception}\n`);
                }
            }
        )
    }
}