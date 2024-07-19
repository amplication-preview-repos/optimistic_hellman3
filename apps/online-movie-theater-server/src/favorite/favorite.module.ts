import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FavoriteModuleBase } from "./base/favorite.module.base";
import { FavoriteService } from "./favorite.service";
import { FavoriteController } from "./favorite.controller";
import { FavoriteResolver } from "./favorite.resolver";

@Module({
  imports: [FavoriteModuleBase, forwardRef(() => AuthModule)],
  controllers: [FavoriteController],
  providers: [FavoriteService, FavoriteResolver],
  exports: [FavoriteService],
})
export class FavoriteModule {}
