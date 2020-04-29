import {Arg, Args, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";

import {SequenceRpc} from "../../grpcClients/SequenceRpc";
import {SequenceMetadata} from "../schemas/SequenceMetadata";
import {SequencemetadataModel} from "../../Models/sequencemetadata-model";
import {SequenceMetadataTransformer} from "../transformers/SequenceMetadataTransformer";

@Resolver()
export class SequenceMetadataResolver {

    sequenceRPCClient: SequenceRpc;
    constructor() {
        this.sequenceRPCClient = new SequenceRpc();
    }

    @Query(returns => [SequenceMetadata], { nullable: true })
    async getProjectSequences(@Arg('projectId') projectId: number): Promise<Array<SequencemetadataModel>> {
        const sequences = await this.sequenceRPCClient.getProjectSeqeuences(projectId);
        console.log(sequences);
        return SequenceMetadataTransformer.TransformAllSequences(sequences.getDataList());
    }

}