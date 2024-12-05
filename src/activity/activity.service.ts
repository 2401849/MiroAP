import { Injectable, NotFoundException } from "@nestjs/common";
import { Request } from "express";
import { Activity } from "./interfaces/activity.interface";
@Injectable()
export class ActivityService {
  private readonly activity: Activity[] = [];

  deploy(request: Request, activity: Activity) {
    const protocol = request.protocol;
    const host = request.host;
    const url = `${protocol}://${host}/activity/${activity.activityID}`;
    this.activity.push(activity);
    return url;
  }
  findOne(id: string) {
    const activity = this.activity.find(
      (activity) => activity.activityID === id
    );
    if (!activity) throw new NotFoundException();
    return { activityID: activity.activityID };
  }
}
