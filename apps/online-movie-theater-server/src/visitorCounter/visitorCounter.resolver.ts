import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VisitorCounterResolverBase } from "./base/visitorCounter.resolver.base";
import { VisitorCounter } from "./base/VisitorCounter";
import { VisitorCounterService } from "./visitorCounter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VisitorCounter)
export class VisitorCounterResolver extends VisitorCounterResolverBase {
  constructor(
    protected readonly service: VisitorCounterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
