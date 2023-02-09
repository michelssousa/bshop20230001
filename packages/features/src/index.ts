import Url from './suport/utils/urls'
import Common from './suport/utils/common'
import Msg from './suport/utils/common-msg'
import logger from 'logger'

import { BuildMakeValidator, Database } from './__entities__'

//Export Types
export { Success, Failure, SuccessOrFailure, Platform, Error, OK } from './suport/utils/common.types'
export { BuildMakeValidator, Database, logger }

export type { DTO, FactoryMakeProps } from './__entities__'

export class FactorySwissArmyKnife {
  /**
   * getUrl
   */
  public getUrl() {
    return new Url()
  }

  /**
   * getUtils
   */
  public getUtils() {
    return new Common()
  }

  /**
   * getMsg
   */
  public getMsg() {
    return new Msg()
  }
}

export const SwissArmyKnife = new FactorySwissArmyKnife()

export * from './__services__/bot'

