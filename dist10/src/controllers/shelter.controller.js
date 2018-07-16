"use strict";
// Uncomment these imports to begin using these cool features!
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {inject} from '@loopback/context';
const repository_1 = require("@loopback/repository");
const shelter_repository_1 = require("../repositories/shelter.repository");
const rest_1 = require("@loopback/rest");
const jsonwebtoken_1 = require("jsonwebtoken");
let ShelterController = class ShelterController {
    constructor(shelterRepo) {
        this.shelterRepo = shelterRepo;
    }
    verifyToken(jwt) {
        try {
            let payload = jsonwebtoken_1.verify(jwt, "shh");
            return payload;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid Token");
        }
    }
    async getAllShelter() {
        return await this.shelterRepo.find();
    }
    async getSpecificShelter(idshelter) {
        if (idshelter == "1") {
            return "123";
        }
        if (idshelter == "B") {
            return "BCD";
            // if (idshelter == "2") {
            //   return "234";
            // }
            // throw new HttpErrors.NotFound("Sorry, id cannot be found");
        }
        throw new rest_1.HttpErrors.NotFound("Sorry, id cannot be found");
    }
};
__decorate([
    rest_1.get("/verify"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShelterController.prototype, "verifyToken", null);
__decorate([
    rest_1.get('/shelter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShelterController.prototype, "getAllShelter", null);
__decorate([
    rest_1.get('/shelter/{idshelter}'),
    __param(0, rest_1.param.path.string("idshelter")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShelterController.prototype, "getSpecificShelter", null);
ShelterController = __decorate([
    __param(0, repository_1.repository(shelter_repository_1.ShelterRepository.name)),
    __metadata("design:paramtypes", [shelter_repository_1.ShelterRepository])
], ShelterController);
exports.ShelterController = ShelterController;
//# sourceMappingURL=shelter.controller.js.map