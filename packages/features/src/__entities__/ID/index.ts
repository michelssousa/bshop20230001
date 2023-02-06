import * as uuid from 'uuid';

export type ID = {
  [key: string]: any
  make: () => string
}
/**
 * @description function for make id in format hash
 * @example makeId()
*@returns uuuid string
* */
// const makeID = (): string => uuid.v4();

const _result = uuid.v4()

export const ID: ID = {
  make: () => _result
}
