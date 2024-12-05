import { Module } from "@nestjs/common";
import { ActivityModule } from "./activity/activity.module";
import { AnalyticsModule } from "./analytics/analytics.module";
import { ConfigurationModule } from "./configuration/configuration.module";

@Module({
  imports: [ConfigurationModule, ActivityModule, AnalyticsModule],
})
export class AppModule {}
