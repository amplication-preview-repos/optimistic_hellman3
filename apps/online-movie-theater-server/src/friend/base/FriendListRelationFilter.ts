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
import { FriendWhereInput } from "./FriendWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FriendListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FriendWhereInput,
  })
  @ValidateNested()
  @Type(() => FriendWhereInput)
  @IsOptional()
  @Field(() => FriendWhereInput, {
    nullable: true,
  })
  every?: FriendWhereInput;

  @ApiProperty({
    required: false,
    type: () => FriendWhereInput,
  })
  @ValidateNested()
  @Type(() => FriendWhereInput)
  @IsOptional()
  @Field(() => FriendWhereInput, {
    nullable: true,
  })
  some?: FriendWhereInput;

  @ApiProperty({
    required: false,
    type: () => FriendWhereInput,
  })
  @ValidateNested()
  @Type(() => FriendWhereInput)
  @IsOptional()
  @Field(() => FriendWhereInput, {
    nullable: true,
  })
  none?: FriendWhereInput;
}
export { FriendListRelationFilter as FriendListRelationFilter };