import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlaylistModuleBase } from "./base/playlist.module.base";
import { PlaylistService } from "./playlist.service";
import { PlaylistController } from "./playlist.controller";
import { PlaylistResolver } from "./playlist.resolver";

@Module({
  imports: [PlaylistModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlaylistController],
  providers: [PlaylistService, PlaylistResolver],
  exports: [PlaylistService],
})
export class PlaylistModule {}
