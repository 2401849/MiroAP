import { Body, Controller, Post } from "@nestjs/common";
import { MiroWrapperService } from "./miro-wrapper.service";

@Controller("miro-wrapper")
export class MiroWrapperController {
  constructor(private readonly miroService: MiroWrapperService) {}
  @Post()
  registerUser() {
    return this.miroService.registerUser("boardId", "user@email");
  }

  @Post()
  async observerSubscription(@Body() body: any) {
    return this.miroService.subscribeBoard(body.boardId);
  }
}
