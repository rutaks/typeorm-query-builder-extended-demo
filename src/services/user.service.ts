
import { User } from "./../entity/User";
import { ExtendedQueryBuilder } from 'typeorm-query-builder-extended';
import { getRepository } from "typeorm";
import { Request } from "express";

/**
 * Class representing the user service layer
 * @since version 1.0
 */
class UserService {
  
  /**
   * Gets Users based on query parsed
   * @param req HTTP request
   * @returns Found users
   */
  static async getUsers(req: Request) {
    const userRepository = getRepository(User);
    const queryBuilder = userRepository.createQueryBuilder('user');
    const builder = new ExtendedQueryBuilder(queryBuilder, req.query);
    const builtQuery = builder.build();
    const results = builtQuery.getMany();
    return results;
  }

  /**
   * Finds user by their uuid
   * @param uuid user's uuid
   * @returns Found user
   */
  static async getUserById(uuid: string) {
    const personRepository = getRepository(User);
    const queryBuilder = personRepository.createQueryBuilder('user');
    queryBuilder.where("user.uuid = :uuid", {uuid});
    return queryBuilder.getOne();
  }
}

export default UserService;
