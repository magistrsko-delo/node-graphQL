import {Field, InputType, Int, ObjectType} from "type-graphql";

@ObjectType()
export class SequenceMetadata {
    @Field(type => Int )
    sequenceId: number;

    @Field(type => String )
    name: string;

    @Field(type => Int )
    projectId: number;

    @Field(type => String )
    thumbnail: string;

    @Field(type => Int )
    status: number;

    @Field(type => Number )
    createdAt: number

    @Field(type => Number )
    updatedAt: number
}