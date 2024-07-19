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
import { VisitorCounterService } from "../visitorCounter.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VisitorCounterCreateInput } from "./VisitorCounterCreateInput";
import { VisitorCounter } from "./VisitorCounter";
import { VisitorCounterFindManyArgs } from "./VisitorCounterFindManyArgs";
import { VisitorCounterWhereUniqueInput } from "./VisitorCounterWhereUniqueInput";
import { VisitorCounterUpdateInput } from "./VisitorCounterUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VisitorCounterControllerBase {
  constructor(
    protected readonly service: VisitorCounterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VisitorCounter })
  @nestAccessControl.UseRoles({
    resource: "VisitorCounter",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: VisitorCounterCreateInput,
  })
  async createVisitorCounter(
    @common.Body() data: VisitorCounterCreateInput
  ): Promise<VisitorCounter> {
    return await this.service.createVisitorCounter({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        count: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [VisitorCounter] })
  @ApiNestedQuery(VisitorCounterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "VisitorCounter",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visitorCounters(
    @common.Req() request: Request
  ): Promise<VisitorCounter[]> {
    const args = plainToClass(VisitorCounterFindManyArgs, request.query);
    return this.service.visitorCounters({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        count: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VisitorCounter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VisitorCounter",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visitorCounter(
    @common.Param() params: VisitorCounterWhereUniqueInput
  ): Promise<VisitorCounter | null> {
    const result = await this.service.visitorCounter({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        count: true,
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
  @swagger.ApiOkResponse({ type: VisitorCounter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VisitorCounter",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: VisitorCounterUpdateInput,
  })
  async updateVisitorCounter(
    @common.Param() params: VisitorCounterWhereUniqueInput,
    @common.Body() data: VisitorCounterUpdateInput
  ): Promise<VisitorCounter | null> {
    try {
      return await this.service.updateVisitorCounter({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          count: true,
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
  @swagger.ApiOkResponse({ type: VisitorCounter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VisitorCounter",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVisitorCounter(
    @common.Param() params: VisitorCounterWhereUniqueInput
  ): Promise<VisitorCounter | null> {
    try {
      return await this.service.deleteVisitorCounter({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          count: true,
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
}
