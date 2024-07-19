import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VisitorCounterService } from "./visitorCounter.service";
import { VisitorCounterControllerBase } from "./base/visitorCounter.controller.base";

@swagger.ApiTags("visitorCounters")
@common.Controller("visitorCounters")
export class VisitorCounterController extends VisitorCounterControllerBase {
  constructor(
    protected readonly service: VisitorCounterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
