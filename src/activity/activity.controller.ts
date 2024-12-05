import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Render,
  Req,
} from "@nestjs/common";
import { Request } from "express";
import { ActivityService } from "./activity.service";
import { Activity } from "./interfaces/activity.interface";

@Controller("activity")
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Post()
  deploy(@Req() request: Request, @Body() activity: Activity) {
    return this.activityService.deploy(request, activity);
  }

  @Get(":id")
  @Render("activity")
  findOne(@Param("id") id: string) {
    return this.activityService.findOne(id);
  }
}
