import {ConfigEnv} from "../config";
import {SequenceMediasModel} from "../Models/sequencemetadata-model";
import {AxiosResponse} from "axios";
import {PublishSequenceType} from "../graph/schemas/SequenceMetadata";

const axios = require('axios').default;

export class SequenceManagerClient {

    public async getSequenceMedias(sequenceId: number): Promise <SequenceMediasModel> {
        return new Promise<SequenceMediasModel>(
            async (resolve, reject) => {
                try {
                    const response = await axios.get(ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequenceId + '/media');
                    return resolve(new SequenceMediasModel(response.data.data));
                } catch (exception) {
                    process.stderr.write(`ERROR received from ${ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequenceId + '/media'}: ${exception}\n`);
                    return reject(`ERROR received from ${ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequenceId + '/media'}: ${exception}\n`);
                }
            }
        )
    }

    public async addMediaToSequence(sequenceId: number, mediaId: number): Promise <SequenceMediasModel> {
        return new Promise<SequenceMediasModel>(
            async (resolve, reject) => {
                try {
                    const response: AxiosResponse = await axios.post(ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequenceId + '/media/' + mediaId);
                    return resolve(new SequenceMediasModel(response.data.data));
                } catch (exception) {
                    process.stderr.write(`ERROR received from ${ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequenceId + '/media'}: ${exception}\n`);
                    return reject(`ERROR received from ${ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequenceId + '/media'}: ${exception}\n`);
                }
            }
        )
    }

    public async deleteMediaFromSequence(sequenceId: number, mediaId: number): Promise <SequenceMediasModel> {
        return new Promise<SequenceMediasModel>(
            async (resolve, reject) => {
                try {
                    const response: AxiosResponse = await axios.delete(ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequenceId + '/media/' + mediaId);
                    return resolve(new SequenceMediasModel(response.data.data));
                } catch (exception) {
                    process.stderr.write(`ERROR received from ${ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequenceId + '/media'}: ${exception}\n`);
                    return reject(`ERROR received from ${ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequenceId + '/media'}: ${exception}\n`);
                }
            }
        )
    }

    public async publishSequence(sequencePublishData: PublishSequenceType): Promise <boolean> {
        return new Promise<boolean>(
            async (resolve, reject) => {
                try {
                    await axios.post(ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequencePublishData.sequenceId + '/publish', sequencePublishData);
                    return resolve(true);
                } catch (exception) {
                    process.stderr.write(`ERROR received from ${ConfigEnv.getConfig().sequenceManagerUrl + 'v1/sequence/' + sequencePublishData.sequenceId + '/publish'}\n`);
                    return reject(false);
                }
            }
        )
    }

}