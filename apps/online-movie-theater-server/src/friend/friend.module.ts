import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FriendModuleBase } from "./base/friend.module.base";
import { FriendService } from "./friend.service";
import { FriendController } from "./friend.controller";
import { FriendResolver } from "./friend.resolver";

@Module({
  imports: [FriendModuleBase, forwardRef(() => AuthModule)],
  controllers: [FriendController],
  providers: [FriendService, FriendResolver],
  exports: [FriendService],
})
export class FriendModule {}
