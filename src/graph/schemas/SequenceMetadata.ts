import {Field, InputType, Int, ObjectType} from "type-graphql";
import {MediaMetadata} from "./MediaMetadata";

@InputType()
export class PublishSequenceType {
    @Field(type => Int )
    sequenceId: number;

    @Field(type => String )
    name: string;

    @Field(type => String )
    siteName: string;
}

@InputType()
export class InputSequenceType {
    @Field(type => Int, {nullable: true} )
    sequenceId: number;

    @Field(type => String )
    name: string;

    @Field(type => Int )
    projectId: number;

    @Field(type => String, {nullable: true} )
    thumbnail: string;

    @Field(type => Int, {nullable: true} )
    status: number;
}

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

@ObjectType()
export class SequenceMedias {
    @Field(type => SequenceMetadata, {nullable: true} )
    sequence: SequenceMetadata;

    @Field(type => [MediaMetadata] )
    Medias: MediaMetadata[];
}

@ObjectType()
export class PublishSequenceRsp {
    @Field(type => Boolean, )
    isPublished: boolean;
}