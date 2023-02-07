import { ID, BuildMakeValidator, _msg } from 'features'
import logger from 'logger'

const id = ID.make()

logger.info(id)

type Test = Partial<{
  id: string,
  email: string,
  name: string,
  githubId: string
}>


// const UserSchema = z.object({
//   id: z.string(),
//   email: z.string(),
//   name: z.string(),
//   githubId: z.string().optional(),
// });

const invalidUser: Test = {
  id: ID.make(),
  email: 'example@mail.com',
}



class TestMakeValidator extends BuildMakeValidator<Test> {
  MakeSchema(): void {
    this._schema = this._buildSchema.object({
      id: this._buildSchema.string(),
      email: this._buildSchema.string(),
      name: this._buildSchema.string(),
      githubId: this._buildSchema.string().optional(),
    })
  }
}

const testValidator = new TestMakeValidator().check(invalidUser)

logger.info(testValidator)



















/**
 * Define our User model using zod
 */

// const parsedUser = UserSchema.parse(invalidUser)

// logger.info(parsedUser)


