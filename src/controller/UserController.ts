import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

const userRepository = new UserRepository()

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    let user = new User()
    user.name = name
    user.email = email
    user = await userRepository.create({ name, email });    
    res.send(user);
  }

  static async getUsers(req: Request, res: Response) {
    const users = await userRepository.list();
    res.send(users);
  }
}