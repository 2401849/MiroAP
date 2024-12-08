import { Injectable, NotFoundException } from "@nestjs/common";
import { Request } from "express";
import { MiroWrapperService } from "../miro-wrapper/miro-wrapper.service";
import { Activity } from "./interfaces/activity.interface";

@Injectable()
export class ActivityService {
  constructor(private readonly miroService: MiroWrapperService) {}

  private readonly activity: Activity[] = [];

  deploy(request: Request, activity: Activity) {
    const protocol = request.protocol;
    const host = request.hostname;
    const url = `${protocol}://${host}/activity/${activity.activityID}`;
    this.activity.push(activity);

    const boardId = "1234"; //fetch board id from DB
    this.miroService.subscribeBoard(boardId);

    return url;
  }
  findOne(id: string) {
    const activity = this.activity.find(
      (activity) => activity.activityID === id
    );
    if (!activity) throw new NotFoundException();
    return { activityID: activity.activityID };
  }
  provideMiroId(activityID: string, userId: string) {
    const activity = this.activity.find(
      (activity) => activity.activityID === activityID
    );
    if (!activity) throw new NotFoundException();
    const boardId = activity.json_params["boardid"];
    this.miroService.registerUser(boardId, userId);
  }
}
