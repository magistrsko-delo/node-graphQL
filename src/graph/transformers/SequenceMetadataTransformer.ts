import {SequencemetadataModel} from "../../Models/sequencemetadata-model";
import {Sequence} from "../../proto/sequence-metadata/sequencemetadata_service_pb";

export class SequenceMetadataTransformer {
    public static TransformSequence(sequence: Sequence | undefined): SequencemetadataModel {

        if (!sequence) {
            throw new Error("Sequence undefined in transformer");
        }

        return new SequencemetadataModel(
            sequence.getSequenceid(),
            sequence.getName(),
            sequence.getProjectid(),
            sequence.getThumbnail(),
            sequence.getStatus(),
            sequence.getCreatedat(),
            sequence.getUpdatedat()
        );
    }

    public static TransformAllSequences(sequences: Array<Sequence>): Array<SequencemetadataModel> {
        let sequencesModel: Array<SequencemetadataModel> = [];

        for (let sequence of sequences) {
            sequencesModel.push(
                this.TransformSequence(sequence)
            )
        }

        return sequencesModel;
    }
}