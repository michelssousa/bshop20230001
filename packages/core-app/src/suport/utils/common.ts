import * as uuid from 'uuid';

/**
 * @description function for make id in format hash
 * @example makeId()
*@returns uuuid string
* */
export const makeID = (): string => uuid.v4();

