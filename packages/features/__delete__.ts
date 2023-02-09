import logger from 'logger'
import { SwissArmyKnife } from 'features'

const { getMsg } = SwissArmyKnife

logger.info(getMsg().Failure().no_context)

