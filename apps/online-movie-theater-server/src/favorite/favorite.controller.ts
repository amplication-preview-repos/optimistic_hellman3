import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavoriteService } from "./favorite.service";
import { FavoriteControllerBase } from "./base/favorite.controller.base";

@swagger.ApiTags("favorites")
@common.Controller("favorites")
export class FavoriteController extends FavoriteControllerBase {
  constructor(
    protected readonly service: FavoriteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
