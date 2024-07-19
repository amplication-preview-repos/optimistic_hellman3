import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavoriteServiceBase } from "./base/favorite.service.base";

@Injectable()
export class FavoriteService extends FavoriteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
