import { Request } from "express";
import { ActivityService } from "./activity.service";
import { Activity } from "./interfaces/activity.interface";
export declare class ActivityController {
    private activityService;
    constructor(activityService: ActivityService);
    deploy(request: Request, activity: Activity): string;
    findOne(id: string): {
        activityID: string;
    };
}
