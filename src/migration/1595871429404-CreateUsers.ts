import * as faker from 'faker';
import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../entity/User";

export class CreateUsers1595871429404 implements MigrationInterface {
  name = "CreateUsers1595871429404";

  public async up(_: QueryRunner): Promise<void> {
    const userRepo = getRepository(User)
    for (let i = 0; i < 10; i++) {
      userRepo.save({
        ...new User(), 
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        dob: new Date(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        gender: i % 2 === 0 ?'FEMALE' : 'MALE',
      })
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
