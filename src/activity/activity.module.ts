import { Module } from "@nestjs/common";
import { MiroObserverService } from "src/miro-observer/miro-observer.service";
import { ActivityController } from "./activity.controller";
import { ActivityService } from "./activity.service";

@Module({
  controllers: [ActivityController],
  providers: [ActivityService],
  imports: [MiroObserverService],
})
export class ActivityModule {}
