import { SwissArmyKnife, logger, BotServices } from 'features'

const { getMsg } = SwissArmyKnife

logger.info(getMsg().Failure().no_context)

logger.info(BotServices.test())

logger.info(BotServices.sayHi('michel'))


