import { Injectable } from "@nestjs/common";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ConfigParameters } from "./interfaces/configuration.interface";

@Injectable()
export class ConfigurationService {
  private readonly parameters: ConfigParameters[] = [
    { name: "name", type: "text/plain" },
    { name: "instructions", type: "text/plain" },
    { name: "boardid", type: "text/plain" },
  ];

  getParameters(): ConfigParameters[] {
    return this.parameters;
  }

  getInterface() {
    const filePath = join(__dirname, "..", "assets", "configuration.html");
    const htmlContent = readFileSync(filePath, "utf-8");
    return htmlContent;
  }
}
