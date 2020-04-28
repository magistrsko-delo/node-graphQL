import {ArgsType, Field, InputType, Int, ObjectType} from "type-graphql";

@InputType()
export class UpdateMedia {
    @Field(type => Int)
    mediaId: number;

    @Field(type => String)
    name: string;

    @Field(type => String)
    siteName: string;

    @Field(type => Number)
    length: number;

    @Field(type => Number)
    status: number;

    @Field(type => String)
    thumbnail: string;

    @Field(type => Number)
    projectId: number;

    @Field(type => String)
    awsBucketWholeMedia: string;

    @Field(type => String)
    awsStorageNameWholeMedia: string;

    @Field(type => Number)
    createdAt: number;
}

@ObjectType()
export class MediaMetadata {
    @Field(type => Int)
    mediaId: number;

    @Field(type => String)
    name: string;

    @Field(type => String)
    siteName: string;

    @Field(type => Number)
    length: number;

    @Field(type => Number)
    status: number;

    @Field(type => String)
    thumbnail: string;

    @Field(type => Number)
    projectId: number;

    @Field(type => String)
    awsBucketWholeMedia: string;

    @Field(type => String)
    awsStorageNameWholeMedia: string;

    @Field(type => Number)
    createdAt: number;

    @Field(type => Number)
    updatedAt: number;

    @Field(type => [String])
    keywords: string[];
}

@ArgsType()
export class GetMediaSearchArgs {
    @Field(type => Int, { defaultValue: -1, nullable: true })
    status: number;

    @Field(type => Int, { defaultValue: -1, nullable: true })
    mediaId: number;

    @Field(type => Int, { defaultValue: -1, nullable: true })
    projectId: number;

}