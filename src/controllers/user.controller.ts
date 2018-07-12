
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { Users } from "../models/user.model";
import { get, param, HttpErrors, post, requestBody, put } from "@loopback/rest";
import { sign, verify } from 'jsonwebtoken';

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

  @get('/login')
  async login(
    @param.query.string("user") user: Users
  ) {
    let foundUser = await this.userRepo.findOne({
      where: {
        and: [
          { email: user.email },
          { password: user.password }
        ],
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
  async registerUser(@requestBody() users: Users): Promise<Users> {
    if (!users.email || !users.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    let usersExist: boolean = !!(await this.userRepo.count({ email: users.email }));
    if (usersExist) {
      throw new HttpErrors.BadRequest('user already exists');
    }
    {
      return await this.userRepo.create(users);
    }
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

  @put("/users/{id}")
  async updatePassword(
    @param.path.string('id') id: string,
    @requestBody() bodyData: any
  ) {
    console.log(id);
    console.log(bodyData);

    if (!bodyData.oldPassword) {
      throw new HttpErrors.BadRequest("I need an old password");
    }
    let user this.userRepo.findById(id);

    bcrypt.compare
  }
}


// 1. Find user by email using this.userRepo.findById
    // 2. Do a bcrypt compare on the found user and the bodyData.oldPassword
    // 3. IF match, then hash the bodyData.newPassword and set it to the
    //found users variable
    // 3. foundUser.password = newHashedPassword;
    // 4. Use await this.userRepo.save(foundUser);
