import { SuccessOrFailure, Error, _msg, Success, Failure } from '@src/index'
import { z, ZodRawShape } from 'zod'

export abstract class BuildMakeValidator<T> {

  protected _schema: any
  protected _buildSchema

  /**
   *
   */
  constructor() {
    this._buildSchema = new Proxy(z, {})
  }

  /*
  *rese
  * **/
  abstract MakeSchema(): void

  check(schemaProps: T): SuccessOrFailure<boolean, Error> {
    try {
      const _schema = z.object(this._schema)
      _schema.parse(schemaProps)
      return Success(true)
    } catch {
      return Failure(_msg.failure.no_accptable)
    }
  }
}

// export { z as MakeSchema } from 'zod'







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










