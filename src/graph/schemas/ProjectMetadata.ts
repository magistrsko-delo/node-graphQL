// src/schemas/Project.ts

import {Field, InputType, Int, ObjectType} from "type-graphql";

@InputType()
export class UpdateProjectMetadata {
    @Field(type => Int)
    projectId: number;

    @Field(type => String)
    name: string;

    @Field(type => String)
    thumbnail: string;

    @Field(type => Number)
    createdAt: number
}

@ObjectType()
export class ProjectMetadata {
    @Field(type => Int, {nullable: true})
    projectId: number;

    @Field(type => String, {nullable: true})
    name: string;

    @Field(type => String, {nullable: true})
    thumbnail: string;

    @Field(type => Number, {nullable: true})
    createdAt: number

    @Field(type => Number, {nullable: true})
    updatedAt: number
}