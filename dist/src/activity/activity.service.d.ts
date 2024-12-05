import { Request } from "express";
import { Activity } from "./interfaces/activity.interface";
export declare class ActivityService {
    private readonly activity;
    deploy(request: Request, activity: Activity): string;
    findOne(id: string): {
        activityID: string;
    };
}
