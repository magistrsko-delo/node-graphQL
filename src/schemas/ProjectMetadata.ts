// src/schemas/Project.ts

import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class ProjectMetadata {
    @Field(type => Int)
    projectId: number;

    @Field(type => String)
    name: string;

    @Field(type => String)
    thumbnail: string;

    @Field(type => Number)
    createdAt: number

    @Field(type => Number)
    updatedAt: number
}