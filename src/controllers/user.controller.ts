
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { Users } from "../models/user.model";

import { get, param, HttpErrors, post, requestBody, put } from "@loopback/rest";
import { sign, verify } from "jsonwebtoken";
let bcrypt = require('bcrypt'); // old style


export class UserController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,

  ) { }

  @get("/verify")
  verifyToken(@param.query.string("jwt") jwt: string) {
    try {
      let payload = verify(jwt, "shh");
      return payload;
    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid Token");
    }
  }

  @post('/login')
  async login(
    @requestBody() user: Users) {
    if (!user.email || !user.password) {
      throw new HttpErrors.Unauthorized('Missing input');
    }
    let userExists: boolean = !!(await this.userRepo.count({
      and: [
        { email: user.email }
      ],
    }));

    let foundUser = await this.userRepo.findOne({
      where: {
        email: user.email
      },
    }) as Users;

    let jwt = sign({
      user: {
        id: foundUser.id,
        email: foundUser.email
      }
    },
      "shh",
      {
        issuer: "auth.ix.com",
        audience: "ix.com"
      });

    return {
      token: jwt
    };
  }

  @post('/register')
  async registerUser(
    @requestBody() users: Users) {
    if (!users.email || !users.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    let usersExist: boolean = !!(await this.userRepo.count({ email: users.email }));
    if (usersExist) {
      throw new HttpErrors.BadRequest('user already exists');
    }
    let userToCreate = new Users();
    userToCreate.name = users.name;
    userToCreate.email = users.email;
    userToCreate.password = users.password;
    userToCreate.password = await bcrypt.hash(users.password, 10);

    let createdUser = await this.userRepo.create(userToCreate);

    let jwt = sign(
      {
        user: {
          username: createdUser.username,
          email: createdUser.email
        },
      },
      'shh',
      {
        issuer: 'auth.ix.com',
        audience: 'ix.com',
      },
    );

    return {
      token: jwt,
    };
  }

  @get('/users')
  async findUsers(): Promise<Users[]> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<Users> {
    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(id);
  }
}
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
