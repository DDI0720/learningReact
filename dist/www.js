"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./src/ts/index"));
var server = new index_1.default();
var app = server.getInstance();
app.listen(8080, function () {
    console.log('http://localhost:8080');
});
//# sourceMappingURL=www.js.map