/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ChatCreateNestedManyWithoutUsersInput } from "./ChatCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { PlaylistCreateNestedManyWithoutUsersInput } from "./PlaylistCreateNestedManyWithoutUsersInput";
import { FavoriteCreateNestedManyWithoutUsersInput } from "./FavoriteCreateNestedManyWithoutUsersInput";
import { FriendCreateNestedManyWithoutUsersInput } from "./FriendCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  avatar?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  friendsCount?: number | null;

  @ApiProperty({
    required: false,
    type: () => ChatCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ChatCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ChatCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  chats?: ChatCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => PlaylistCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PlaylistCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PlaylistCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  playlists?: PlaylistCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => FavoriteCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FavoriteCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FavoriteCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  favorites?: FavoriteCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => FriendCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FriendCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FriendCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  friends?: FriendCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };