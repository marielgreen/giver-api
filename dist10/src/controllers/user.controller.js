"use strict";
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
const repository_1 = require("@loopback/repository");
const user_repository_1 = require("../repositories/user.repository");
const user_model_1 = require("../models/user.model");
const rest_1 = require("@loopback/rest");
const jsonwebtoken_1 = require("jsonwebtoken");
let bcrypt = require('bcrypt'); // old style
let UserController = class UserController {
    constructor(userRepo) {
        this.userRepo = userRepo;
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
    async login(user) {
        let foundUser = await this.userRepo.findOne({
            where: {
                and: [
                    { email: user.email },
                    { password: user.password }
                ],
            },
        });
        let jwt = jsonwebtoken_1.sign({
            user: {
                id: foundUser.id,
                email: foundUser.email
            }
        }, "shh", {
            issuer: "auth.ix.com",
            audience: "ix.com"
        });
        return {
            token: jwt
        };
    }
    async registerUser(users) {
        if (!users.email || !users.password) {
            throw new rest_1.HttpErrors.BadRequest('missing data');
        }
        let usersExist = !!(await this.userRepo.count({ email: users.email }));
        if (usersExist) {
            throw new rest_1.HttpErrors.BadRequest('user already exists');
        }
        let userToCreate = new user_model_1.Users();
        userToCreate.name = users.name;
        userToCreate.email = users.email;
        userToCreate.password = users.password;
        userToCreate.password = await bcrypt.hash(users.password, 10);
        let createdUser = await this.userRepo.create(userToCreate);
        let jwt = jsonwebtoken_1.sign({
            user: {
                username: createdUser.username,
                email: createdUser.email
            },
        }, 'shh', {
            issuer: 'auth.ix.com',
            audience: 'ix.com',
        });
        return {
            token: jwt,
        };
    }
    async findUsers() {
        return await this.userRepo.find();
    }
    async findUsersById(id) {
        // Check for valid ID
        let userExists = !!(await this.userRepo.count({ id }));
        if (!userExists) {
            throw new rest_1.HttpErrors.BadRequest(`user ID ${id} does not exist`);
        }
        return await this.userRepo.findById(id);
    }
};
__decorate([
    rest_1.get("/verify"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "verifyToken", null);
__decorate([
    rest_1.post('/login'),
    __param(0, rest_1.param.query.string("user")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.Users]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    rest_1.post('/register'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.Users]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerUser", null);
__decorate([
    rest_1.get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUsers", null);
__decorate([
    rest_1.get('/users/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUsersById", null);
UserController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
exports.UserController = UserController;
//@put("/users/{id}")
//async updatePassword(
// @param.path.number('id') id: number,
// @param.path.string('email') email: string,
//@requestBody() bodyData: any
//) {
// console.log(id);
// console.log(bodyData);
//  if (!bodyData.oldPassword) {
//  throw new HttpErrors.BadRequest("I need an old password");
// }
// return await this.userRepo.findById(id);
// let foundUser = await this.userRepo.findOne({
//   where: {
//  and: [
//   { email: id.email },
//  { password: id.password }
//  ],
// },
//  }) as Users;
//if (!await bcrypt.compare(authenticationRequest.password, foundUser.password))
//}
//}
// 1. Find user by email using this.userRepo.findById
// 2. Do a bcrypt compare on the found user and the bodyData.oldPassword
// 3. IF match, then hash the bodyData.newPassword and set it to the
//found users variable
// 3. foundUser.password = newHashedPassword;
// 4. Use await this.userRepo.save(foundUser)
//# sourceMappingURL=user.controller.js.map