import { User } from './user.entity';

describe('User should be created', () => {
  test('should be able to create a user', () => {
    const user = new User({
      login: 'Rafael.Russo',
      name: 'Rafael Russo',
      cpf: '11111111111',
      email: 'email-com@gmail.com',
    });
    expect(user).toBeTruthy();
    expect(user).not.toBeNull();
  });
});
