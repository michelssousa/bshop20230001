import {
  Success,
  Failure,
  _check,
  _msg,
  makeValidator,
  makeSchema as z,
  SuccessOrFailure,
  Error
} from 'features'


// import { faker } from '@faker-js/faker';


// import {database} from 'database'

const can = {
  name: 'pamplemousse',
  ounces: 12,
};
describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
})


describe('support test function SuccessOrFailure', () => {
  const _msgError = _msg.failure.bad_request


  const v1 = 10
  const v2 = 20

  const _checkResultokOrError = (v1: number, v2: number): SuccessOrFailure<boolean, Error> => {
    if (_check.isGreaterThat(v1, v2)) {
      return Success(true)
    }
    return Failure(_msgError)
  }

  const _resultokOrError = _checkResultokOrError(v1, v2)

  test('should be able return string', () => {
    expect(_resultokOrError.isFailure()).toBe(true);
  });
})


describe('should be able failed check object', () => {

  const UserSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    githubId: z.string().optional(),
  });

  const invalidUser = {
    id: 9,
    email: 'example@mail.com',
  }

  const builUserValidation = makeValidator(UserSchema)

  const _resultValidator = builUserValidation(invalidUser)

  expect(_resultValidator.isSuccess()).toBe(false)

})


// import { faker } from '@faker-js/faker';
//
// import {
//   useUserValidator as validator,
//   encryptedSecrectInformation as encrypted,
//   crypto,
//   token,
//   UserProps,
//   makeUser,
//   MapperProps,
// } from '@src/core';
// import { UsersDTO } from '@src/dataProvider';
// import { UsersServices } from '@src/services';
//
// describe('Users functional tests', () => {
//   test('should be able validate new password', () => {
//     const passwordTest = 'A@190ehe';
//     const resultOrError = validator.newPassword(passwordTest);
//     expect(resultOrError.isSuccess()).toBe(true);
//   });
//
//   test('not should be able validate new password', () => {
//     const passwordTest = faker.internet.password(20);
//     const resultOrError = validator.newPassword(passwordTest);
//     expect(resultOrError.isFailure()).toBe(true);
//   });
//
//   test('should be encrypted password', async () => {
//     const passwordTest = faker.internet.password(20);
//     const passwordEncryped = await encrypted.hash(passwordTest);
//     expect(passwordTest).not.toBe(passwordEncryped);
//   });
//
//   test('should be validate encrypted password', async () => {
//     const passwordTest = faker.internet.password(20);
//     const passwordEncryped = await encrypted.hash(passwordTest);
//     const result = encrypted.compare(passwordTest, passwordEncryped);
//     expect(result).toBe(true);
//   });
//
//   test('should be generate token validate', async () => {
//     let _result = true;
//
//     const user: UserProps = {
//       _cod: faker.datatype.uuid(),
//       _name: faker.name.firstName(),
//       _role: 'admin',
//     };
//
//     const jwtOrError = token.generate(user);
//
//     if (jwtOrError.isFailure()) {
//       _result = false;
//     }
//
//     // if (jwtOrError.isSuccess()) {
//     //   console.log(jwtOrError.getValue());
//     // }
//
//     expect(_result).toBe(true);
//   });
//
//   test('should be able to return information the user send on token', async () => {
//     let userCod = '';
//
//     const user: UserProps = {
//       _cod: faker.datatype.uuid(),
//       _name: faker.name.firstName(),
//       _role: 'admin',
//     };
//
//     const jwtOrError = token.generate(user);
//
//     if (jwtOrError.isSuccess()) {
//       const jwt = jwtOrError.getValue();
//       const jwtValidateOrError = token.verify(jwt);
//       if (jwtValidateOrError.isSuccess()) {
//         const getUserFromToken = jwtValidateOrError.getValue();
//         userCod = getUserFromToken.sub;
//       }
//     }
//     // console.log(userCod);
//     expect(userCod).toBe(user._cod);
//   });
//
//   test('not should be able to return information the user send on token', async () => {
//     let userCod = '';
//     const timeValidateToken = '1s';
//     const delay = 2000;
//
//     const user: UserProps = {
//       _cod: faker.datatype.uuid(),
//       _name: faker.name.firstName(),
//       _role: 'admin',
//     };
//
//     const jwtOrError = token.generate(user, timeValidateToken);
//
//     setTimeout(() => {
//       if (jwtOrError.isSuccess()) {
//         const jwt = jwtOrError.getValue();
//         const jwtValidateOrError = token.verify(jwt);
//         if (jwtValidateOrError.isSuccess()) {
//           const getUserFromToken = jwtValidateOrError.getValue();
//           userCod = getUserFromToken.sub;
//         }
//       }
//     }, delay);
//
//     // console.log(userCod);
//
//     expect(userCod).not.toBe(user._cod);
//   });
//
//   test('should be encrypted information ', async () => {
//     const info = '1234';
//     const encryptedMsg = crypto.encrypted(info);
//     expect(info).not.toBe(encryptedMsg);
//   });
//   test('should be decrypted information ', async () => {
//     const info = '1234';
//     const encryptedMsg = crypto.encrypted(info);
//     const decryptedMsg = crypto.decrypted(encryptedMsg);
//     expect(info).toBe(decryptedMsg);
//   });
//
//   test('should be able create user validate', async () => {
//     const userProps: UserProps = {
//       _cod: faker.datatype.uuid(),
//       _name: faker.name.firstName(),
//       _email: faker.internet.email(),
//       _password: 'A@190ehe',
//       _role: 'admin',
//     };
//
//     const userOrError = makeUser(userProps);
//
//     // console.log(userOrError.getValue().getProps());
//
//     expect(userOrError.isSuccess()).toBe(true);
//   });
//
//   test('not should be able create user validate', async () => {
//     const userProps: UserProps = {
//       _cod: faker.datatype.uuid(),
//       _name: faker.name.firstName(),
//       _email: '',
//       _password: '',
//       _role: 'admin',
//     };
//
//     const userOrError = makeUser(userProps);
//     const _result = userOrError.isFailure();
//
//     expect(_result).toBe(true);
//   });
//
//   test('shoud be able create user entity valid with user dto', async () => {
//     const userProps: UserProps = {
//       _cod: faker.datatype.uuid(),
//       _name: faker.name.firstName(),
//       _email: faker.internet.email(),
//       _password: 'A@190ehe',
//       _role: 'admin',
//     };
//     const userDto = new UsersDTO();
//     userDto._cod = userProps._cod!;
//     userDto._name = userProps._name!;
//     userDto._email = userProps._email!;
//     userDto._password = userProps._password!;
//     userDto._role = userProps._role!;
//     const userDTO = UsersServices.parseEntity(userDto).getValue();
//     const userEntity = makeUser(userDTO).getValue();
//     expect(userDTO._cod).toBe(userEntity.getProps()._cod);
//   });
//
//   test('verify commun ****End Project Delete*****', async () => {
//     const info = true;
//     expect(info).toBe(true);
//   });
// });
//
// // import { User } from '@src/models/user';
// // import AuthService from '@src/services/auth';
// //
// // describe('Users functional tests', () => {
// //   beforeEach(async () => {
// //     await User.deleteMany({});
// //   });
// //   describe('When creating a new user', () => {
// //     it('should successfully create a new user with encrypted password', async () => {
// //       const newUser = {
// //         name: 'John Doe',
// //         email: 'john@mail.com',
// //         password: '1234',
// //       };
// //       const response = await global.testRequest.post('/users').send(newUser);
// //       expect(response.status).toBe(201);
// //       await expect(
// //         AuthService.comparePasswords(newUser.password, response.body.password)
// //       ).resolves.toBeTruthy();
// //       expect(response.body).toEqual(
// //         expect.objectContaining({
// //           ...newUser,
// //           ...{ password: expect.any(String) },
// //         })
// //       );
// //     });
// //
// //     it('Should return a validation error when a field is missing', async () => {
// //       const newUser = {
// //         email: 'john@mail.com',
// //         password: '1234',
// //       };
// //       const response = await global.testRequest.post('/users').send(newUser);
// //
// //       expect(response.status).toBe(400);
// //       expect(response.body).toEqual({
// //         code: 400,
// //         error: 'Bad Request',
// //         message: 'User validation failed: name: Path `name` is required.',
// //       });
// //     });
// //
// //     it('Should return 409 when the email already exists', async () => {
// //       const newUser = {
// //         name: 'John Doe',
// //         email: 'john@mail.com',
// //         password: '1234',
// //       };
// //       await global.testRequest.post('/users').send(newUser);
// //       const response = await global.testRequest.post('/users').send(newUser);
// //
// //       expect(response.status).toBe(409);
// //       expect(response.body).toEqual({
// //         code: 409,
// //         error: 'Conflict',
// //         message:
// //           'User validation failed: email: already exists in the database.',
// //       });
// //     });
// //   });
// //
// //   describe('when authenticating a user', () => {
// //     it('should generate a token for a valid user', async () => {
// //       const newUser = {
// //         name: 'John Doe',
// //         email: 'john@mail.com',
// //         password: '1234',
// //       };
// //       const user = await new User(newUser).save();
// //       const response = await global.testRequest
// //         .post('/users/authenticate')
// //         .send({ email: newUser.email, password: newUser.password });
// //
// //       const JwtClaims = AuthService.decodeToken(response.body.token);
// //       expect(JwtClaims).toMatchObject({ sub: user.id });
// //     });
// //     it('Should return UNAUTHORIZED if the user with the given email is not found', async () => {
// //       const response = await global.testRequest
// //         .post('/users/authenticate')
// //         .send({ email: 'some-email@mail.com', password: '1234' });
// //
// //       expect(response.status).toBe(401);
// //     });
// //
// //     it('Should return UNAUTHORIZED if the user is found but the password does not match', async () => {
// //       const newUser = {
// //         name: 'John Doe',
// //         email: 'john@mail.com',
// //         password: '1234',
// //       };
// //       await new User(newUser).save();
// //       const response = await global.testRequest
// //         .post('/users/authenticate')
// //         .send({ email: newUser.email, password: 'different password' });
// //
// //       expect(response.status).toBe(401);
// //     });
// //   });
// //
// //   describe('When getting user profile info', () => {
// //     it(`Should return the token's owner profile information`, async () => {
// //       const newUser = {
// //         name: 'John Doe',
// //         email: 'john@mail.com',
// //         password: '1234',
// //       };
// //       const user = await new User(newUser).save();
// //       const token = AuthService.generateToken(user.id);
// //       const { body, status } = await global.testRequest
// //         .get('/users/me')
// //         .set({ 'x-access-token': token });
// //
// //       expect(status).toBe(200);
// //       expect(body).toMatchObject(JSON.parse(JSON.stringify({ user })));
// //     });
// //
// //     it(`Should return Not Found, when the user is not found`, async () => {
// //       //create a new user but don't save it
// //       const token = AuthService.generateToken('fake-user-id');
// //       const { body, status } = await global.testRequest
// //         .get('/users/me')
// //         .set({ 'x-access-token': token });
// //
// //       expect(status).toBe(404);
// //       expect(body.message).toBe('User not found!');
// //     });
// //   });
// // });
