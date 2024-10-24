"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.write = void 0;
const fs_1 = __importDefault(require("fs"));
const contactsFile = './src/data/contacts.json';
const write = async (contacts) => {
    return fs_1.default.writeFileSync(contactsFile, JSON.stringify(contacts));
};
exports.write = write;
const read = async () => {
    return fs_1.default.readFileSync(contactsFile, 'utf-8');
};
exports.read = read;
