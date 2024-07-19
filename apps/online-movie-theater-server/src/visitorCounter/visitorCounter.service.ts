import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisitorCounterServiceBase } from "./base/visitorCounter.service.base";

@Injectable()
export class VisitorCounterService extends VisitorCounterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
