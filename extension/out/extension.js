"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const axios_1 = require("axios");
function activate(context) {
    console.log('Congratulations, your extension "extsn" is now active!');
    // Implementation of the command provided with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extsn.getProblem', () => __awaiter(this, void 0, void 0, function* () {
        // vscode.window.showInformationMessage('Running HelloWorld...');
        try {
            const result = yield axios_1.default.post("http://localhost:3000/problem", {
                source: "r/dailyprogrammer"
            });
            const text = result.data.problem;
            console.log(text);
            vscode.window.showInformationMessage(text);
        }
        catch (e) {
            console.error("Err");
            vscode.window.showInformationMessage("error");
        }
    }));
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map