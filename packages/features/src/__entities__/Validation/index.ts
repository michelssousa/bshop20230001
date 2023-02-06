import { SuccessOrFailure, Error, _msg, Success, Failure } from '@src/index'
import { z } from 'zod'

export const makeValidator = (schemaProps: any) => <T>(props: T): SuccessOrFailure<boolean, Error> => {
  try {
    const _schema = z.object(schemaProps)
    _schema.parse(props)
    return Success(true)
  } catch {
    return Failure(_msg.failure.no_accptable)
  }
}

export { z as makeSchema } from 'zod'







/**
 *type UserType = z.infer<typeo User>;
*@returns
* */
// }
//

// const validate = (schema) => (req, res, next) => {
//   try {
//     schema.parse({
//       body: req.body,
//       query: req.query,
//       params: req.params,
//     });
//
//     next();
//   } catch (err) {
//     return res.status(400).send(err.errors);
//   }
// };










