/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PlaylistWhereUniqueInput } from "./PlaylistWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeletePlaylistArgs {
  @ApiProperty({
    required: true,
    type: () => PlaylistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlaylistWhereUniqueInput)
  @Field(() => PlaylistWhereUniqueInput, { nullable: false })
  where!: PlaylistWhereUniqueInput;
}

export { DeletePlaylistArgs as DeletePlaylistArgs };