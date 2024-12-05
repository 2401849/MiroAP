"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationService = void 0;
const common_1 = require("@nestjs/common");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
let ConfigurationService = class ConfigurationService {
    constructor() {
        this.parameters = [
            { name: "name", type: "text/plain" },
            { name: "instructions", type: "text/plain" },
            { name: "boardid", type: "text/plain" },
        ];
    }
    getParameters() {
        return this.parameters;
    }
    getInterface() {
        const filePath = (0, node_path_1.join)(__dirname, "..", "assets", "configuration.html");
        const htmlContent = (0, node_fs_1.readFileSync)(filePath, "utf-8");
        return htmlContent;
    }
};
exports.ConfigurationService = ConfigurationService;
exports.ConfigurationService = ConfigurationService = __decorate([
    (0, common_1.Injectable)()
], ConfigurationService);
//# sourceMappingURL=configuration.service.js.map