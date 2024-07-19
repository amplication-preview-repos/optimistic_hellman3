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
import { MovieWhereInput } from "./MovieWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MovieOrderByInput } from "./MovieOrderByInput";

@ArgsType()
class MovieFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MovieWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MovieWhereInput, { nullable: true })
  @Type(() => MovieWhereInput)
  where?: MovieWhereInput;

  @ApiProperty({
    required: false,
    type: [MovieOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MovieOrderByInput], { nullable: true })
  @Type(() => MovieOrderByInput)
  orderBy?: Array<MovieOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MovieFindManyArgs as MovieFindManyArgs };
