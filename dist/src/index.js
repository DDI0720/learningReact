"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.router();
    }
    Server.prototype.router = function () {
        this.app.get('/', function (req, res) {
            res.json({ hello: 'world' });
        });
    };
    Server.prototype.getInstance = function () {
        return this.app;
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=index.js.map