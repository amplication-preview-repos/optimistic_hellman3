/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FriendService } from "../friend.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FriendCreateInput } from "./FriendCreateInput";
import { Friend } from "./Friend";
import { FriendFindManyArgs } from "./FriendFindManyArgs";
import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";
import { FriendUpdateInput } from "./FriendUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FriendControllerBase {
  constructor(
    protected readonly service: FriendService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Friend })
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FriendCreateInput,
  })
  async createFriend(@common.Body() data: FriendCreateInput): Promise<Friend> {
    return await this.service.createFriend({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        friend: data.friend
          ? {
              connect: data.friend,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isApproved: true,

        user: {
          select: {
            id: true,
          },
        },

        friend: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Friend] })
  @ApiNestedQuery(FriendFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async friends(@common.Req() request: Request): Promise<Friend[]> {
    const args = plainToClass(FriendFindManyArgs, request.query);
    return this.service.friends({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isApproved: true,

        user: {
          select: {
            id: true,
          },
        },

        friend: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Friend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async friend(
    @common.Param() params: FriendWhereUniqueInput
  ): Promise<Friend | null> {
    const result = await this.service.friend({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isApproved: true,

        user: {
          select: {
            id: true,
          },
        },

        friend: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Friend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FriendUpdateInput,
  })
  async updateFriend(
    @common.Param() params: FriendWhereUniqueInput,
    @common.Body() data: FriendUpdateInput
  ): Promise<Friend | null> {
    try {
      return await this.service.updateFriend({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          friend: data.friend
            ? {
                connect: data.friend,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          isApproved: true,

          user: {
            select: {
              id: true,
            },
          },

          friend: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Friend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFriend(
    @common.Param() params: FriendWhereUniqueInput
  ): Promise<Friend | null> {
    try {
      return await this.service.deleteFriend({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          isApproved: true,

          user: {
            select: {
              id: true,
            },
          },

          friend: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/friends")
  @ApiNestedQuery(FriendFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "read",
    possession: "any",
  })
  async findFriends(
    @common.Req() request: Request,
    @common.Param() params: FriendWhereUniqueInput
  ): Promise<Friend[]> {
    const query = plainToClass(FriendFindManyArgs, request.query);
    const results = await this.service.findFriends(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isApproved: true,

        user: {
          select: {
            id: true,
          },
        },

        friend: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/friends")
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "update",
    possession: "any",
  })
  async connectFriends(
    @common.Param() params: FriendWhereUniqueInput,
    @common.Body() body: FriendWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      friends: {
        connect: body,
      },
    };
    await this.service.updateFriend({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/friends")
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "update",
    possession: "any",
  })
  async updateFriends(
    @common.Param() params: FriendWhereUniqueInput,
    @common.Body() body: FriendWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      friends: {
        set: body,
      },
    };
    await this.service.updateFriend({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/friends")
  @nestAccessControl.UseRoles({
    resource: "Friend",
    action: "update",
    possession: "any",
  })
  async disconnectFriends(
    @common.Param() params: FriendWhereUniqueInput,
    @common.Body() body: FriendWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      friends: {
        disconnect: body,
      },
    };
    await this.service.updateFriend({
      where: params,
      data,
      select: { id: true },
    });
  }
}
