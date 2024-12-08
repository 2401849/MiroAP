import { Module } from "@nestjs/common";
import { MiroWrapperController } from "./miro-wrapper.controller";
import { MiroWrapperService } from "./miro-wrapper.service";

@Module({
  controllers: [MiroWrapperController],
  providers: [MiroWrapperService],
  exports: [MiroWrapperService],
})
export class MiroWrapperModule {}
