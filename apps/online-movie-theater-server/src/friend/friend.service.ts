import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FriendServiceBase } from "./base/friend.service.base";

@Injectable()
export class FriendService extends FriendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
