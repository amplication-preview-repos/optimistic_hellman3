import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VisitorCounterModuleBase } from "./base/visitorCounter.module.base";
import { VisitorCounterService } from "./visitorCounter.service";
import { VisitorCounterController } from "./visitorCounter.controller";
import { VisitorCounterResolver } from "./visitorCounter.resolver";

@Module({
  imports: [VisitorCounterModuleBase, forwardRef(() => AuthModule)],
  controllers: [VisitorCounterController],
  providers: [VisitorCounterService, VisitorCounterResolver],
  exports: [VisitorCounterService],
})
export class VisitorCounterModule {}
