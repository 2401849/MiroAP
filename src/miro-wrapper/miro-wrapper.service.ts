import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

@Injectable()
export class MiroWrapperService {
  constructor(private readonly httpService: HttpService) {}

  async registerUser(boardId: string, userId: string): Promise<string> {
    const apiUrl = `https://api.miro.com/v2/boards/${boardId}/members`;
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
    const data = {
      emails: [userId],
      role: "editor",
    };
    try {
      const response = await firstValueFrom(
        this.httpService.post(apiUrl, data, { headers })
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error while registering user, ${error}`);
    }
  }

  async subscribeBoard(boardId: string): Promise<string> {
    const apiUrl =
      "https://api.miro.com/v2-experimental/webhooks/board_subscriptions";
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
    const data = {
      boardId: boardId,
      callbackUrl: "observer_endpoint",
    };
    try {
      const response = await firstValueFrom(
        this.httpService.post(apiUrl, data, { headers })
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error while subscribing board, ${error}`);
    }
  }
}
