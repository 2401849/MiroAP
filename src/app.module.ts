import { Module } from "@nestjs/common";
import { ActivityModule } from "./activity/activity.module";
import { AnalyticsModule } from "./analytics/analytics.module";
import { ConfigurationModule } from "./configuration/configuration.module";
import { MiroObserverModule } from "./miro-observer/miro-observer.module";
import { MiroWrapperModule } from "./miro-wrapper/miro-wrapper.module";

@Module({
  imports: [
    ConfigurationModule,
    ActivityModule,
    AnalyticsModule,
    MiroObserverModule,
    MiroWrapperModule,
  ],
})
export class AppModule {}
