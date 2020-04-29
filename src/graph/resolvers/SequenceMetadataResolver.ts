import {Arg, Mutation, Query, Resolver} from "type-graphql";

import {SequenceRpc} from "../../grpcClients/SequenceRpc";
import {
    InputSequenceType,
    PublishSequenceRsp,
    PublishSequenceType,
    SequenceMedias,
    SequenceMetadata
} from "../schemas/SequenceMetadata";
import {SequenceMediasModel, SequencemetadataModel} from "../../Models/sequencemetadata-model";
import {SequenceMetadataTransformer} from "../transformers/SequenceMetadataTransformer";
import {SequenceManagerClient} from "../../httpClients/SequenceManagerClient";
import {SequenceMediaResponse} from "../../proto/sequence-metadata/sequencemetadata_service_pb";

@Resolver()
export class SequenceMetadataResolver {

    sequenceRPCClient: SequenceRpc;
    sequenceManagerHttpClient: SequenceManagerClient;
    constructor() {
        this.sequenceRPCClient = new SequenceRpc();
        this.sequenceManagerHttpClient = new SequenceManagerClient();
    }

    @Query(returns => [SequenceMetadata], { nullable: false })
    async getProjectSequences(@Arg('projectId') projectId: number): Promise<Array<SequencemetadataModel>> {
        try {
            const sequences = await this.sequenceRPCClient.getProjectSeqeuences(projectId);
            this.sequenceManagerHttpClient.getSequenceMedias(5);
            return SequenceMetadataTransformer.TransformAllSequences(sequences.getDataList());
        } catch (e) {
            throw new Error(e);
        }

    }

    @Query(returns => SequenceMedias, { nullable: true })
    async getSequenceMedias(@Arg('sequenceId') sequenceId: number): Promise<SequenceMediasModel>  {
        try {
            return await this.sequenceManagerHttpClient.getSequenceMedias(sequenceId);
        } catch (e) {
            throw new Error(e);
        }
    }

    @Mutation(returns => SequenceMedias, {nullable: false})
    async manageMediaInSequence(
        @Arg('sequenceId') sequenceId: number,
        @Arg('mediaId') mediaId: number,
        @Arg('isDelete', {defaultValue: false, nullable: true}) isDelete: boolean,
        @Arg('isAdd', {defaultValue: false, nullable: true}) isAdd: boolean
    ): Promise<SequenceMediasModel> {
        if (isAdd) {
            try {
                return await this.sequenceManagerHttpClient.addMediaToSequence(sequenceId, mediaId);
            } catch (e) {
                throw new Error(e);
            }
        } else if (isDelete) {
            try {
                return await this.sequenceManagerHttpClient.deleteMediaFromSequence(sequenceId, mediaId);
            } catch (e) {
                throw new Error(e);
            }
        } else {
            throw new Error('one of arguments isAdd or isDelete shoud be true');
        }
    }

    @Mutation(returns => [SequenceMetadata], {nullable: false})
    async createSequence(
        @Arg('newSequence') newSequence: InputSequenceType): Promise<Array<SequencemetadataModel>> {
        try {
            newSequence.thumbnail = "";
            const createdSequence: SequenceMediaResponse  = await this.sequenceRPCClient.createSequence(newSequence);
            return [SequenceMetadataTransformer.TransformSequence(createdSequence.getSequence())]
        } catch (e) {
            throw new Error(e);
        }
    }

    @Mutation(returns => [SequenceMetadata], {nullable: false})
    async updateSequence(
        @Arg('updateSequenceData') updateSequenceData: InputSequenceType): Promise<Array<SequencemetadataModel>> {
        try {
            const createdSequence: SequenceMediaResponse  = await this.sequenceRPCClient.updateSequence(updateSequenceData);
            return [SequenceMetadataTransformer.TransformSequence(createdSequence.getSequence())]
        } catch (e) {
            throw new Error(e);
        }
    }

    @Mutation(returns => PublishSequenceRsp, {nullable: true})
    async publishSequence(
        @Arg('publishData') publishData: PublishSequenceType): Promise<{isPublished: boolean}> {
        try {
            await this.sequenceManagerHttpClient.publishSequence(publishData);
            return {
                isPublished: true
            }
        } catch (e) {
            throw new Error(e);
        }
    }
}