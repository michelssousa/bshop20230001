import { ID, makeValidator, makeSchema as z, SuccessOrFailure } from 'features'
import logger from 'logger'

const id = ID.make()

logger.info(id)

/**
 * Define our User model using zod
 */

// const parsedUser = UserSchema.parse(invalidUser)

// logger.info(parsedUser)


