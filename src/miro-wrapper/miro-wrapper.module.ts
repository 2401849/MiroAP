import { Module } from "@nestjs/common";
import { MiroWrapperService } from "./miro-wrapper.service";

@Module({
  providers: [MiroWrapperService],
  exports: [MiroWrapperService],
})
export class MiroWrapperModule {}
