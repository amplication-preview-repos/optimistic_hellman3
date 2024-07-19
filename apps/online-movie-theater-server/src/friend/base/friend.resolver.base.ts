/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Friend } from "./Friend";
import { FriendCountArgs } from "./FriendCountArgs";
import { FriendFindManyArgs } from "./FriendFindManyArgs";
import { FriendFindUniqueArgs } from "./FriendFindUniqueArgs";
import { CreateFriendArgs } from "./CreateFriendArgs";
import { UpdateFriendArgs } from "./UpdateFriendArgs";
import { DeleteFriendArgs } from "./DeleteFriendArgs";
import { User } from "../../user/base/User";
import { FriendService } from "../friend.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Friend)
export class FriendResolverBase {
  constructor(
    protected readonly service: FriendService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "read",
    possession: "any",
  })
  async _friendsMeta(
    @graphql.Args() args: FriendCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Friend])
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "read",
    possession: "any",
  })
  async friends(@graphql.Args() args: FriendFindManyArgs): Promise<Friend[]> {
    return this.service.friends(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Friend, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "read",
    possession: "own",
  })
  async friend(
    @graphql.Args() args: FriendFindUniqueArgs
  ): Promise<Friend | null> {
    const result = await this.service.friend(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Friend)
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "create",
    possession: "any",
  })
  async createFriend(@graphql.Args() args: CreateFriendArgs): Promise<Friend> {
    return await this.service.createFriend({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        friend: args.data.friend
          ? {
              connect: args.data.friend,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Friend)
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "update",
    possession: "any",
  })
  async updateFriend(
    @graphql.Args() args: UpdateFriendArgs
  ): Promise<Friend | null> {
    try {
      return await this.service.updateFriend({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          friend: args.data.friend
            ? {
                connect: args.data.friend,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Friend)
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "delete",
    possession: "any",
  })
  async deleteFriend(
    @graphql.Args() args: DeleteFriendArgs
  ): Promise<Friend | null> {
    try {
      return await this.service.deleteFriend(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Friend], { name: "friends" })
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "read",
    possession: "any",
  })
  async findFriends(
    @graphql.Parent() parent: Friend,
    @graphql.Args() args: FriendFindManyArgs
  ): Promise<Friend[]> {
    const results = await this.service.findFriends(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Friend): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Friend, {
    nullable: true,
    name: "friend",
  })
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "read",
    possession: "any",
  })
  async getFriend(@graphql.Parent() parent: Friend): Promise<Friend | null> {
    const result = await this.service.getFriend(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}