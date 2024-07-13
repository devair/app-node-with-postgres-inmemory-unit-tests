import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

describe('User repository tests', () => {
  let userRepository: UserRepository;

  beforeAll(async () => {
    userRepository = new UserRepository()
  },3000000);


  it('should create a new user', async () => {
    const user = new User();
    user.name = 'Alice';
    user.email = `teste@gmail.com`
    await userRepository.create(user);

    const users = await userRepository.findByName('Alice');    
    expect(users).toBeInstanceOf(Array)
    expect(users.length).toBeGreaterThan(0)
  });
});
