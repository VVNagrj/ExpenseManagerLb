import {inject} from '@loopback/core';
import {compare, genSalt, hash} from 'bcryptjs';

interface PasswordHasher<T = string> {
  hashPassword(password: T): Promise<T>;
  comparePassword(providedPass: T, storedPass: T): Promise<boolean>;
}

export class BcryptHasher implements PasswordHasher<string> {
  async comparePassword(
    providedPass: string,
    storedPass: string,
  ): Promise<boolean> {
    const passwordMatched = await compare(providedPass, storedPass);
    console.log(providedPass, storedPass, passwordMatched)
    return passwordMatched;
  }
  @inject('rounds')
  public readonly rounds: number;
  async hashPassword(password: string) {
    const salt = await genSalt(this.rounds);
    return await hash(password, salt);
  }
}
