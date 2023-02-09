import Url from './suport/utils/urls'
import Common from './suport/utils/common'
import Msg from './suport/utils/common-msg'

export { BuildMakeValidator } from './__entities__/Validation'

//Export Types
export type { Database } from './__entities__/Database'
export { Success, Failure, SuccessOrFailure, Platform, Error, OK } from './suport/utils/common.types'


class FactorySwissArmyKnife {
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
