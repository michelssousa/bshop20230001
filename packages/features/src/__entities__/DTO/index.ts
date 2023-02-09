
import { FactorySwissArmyKnife, BuildMakeValidator } from '@src/index'

export type DTO = {
  [key: string]: any
  idObject: string
}

export type FactoryMakeProps<DTO> = {
  _swArKnife: FactorySwissArmyKnife
  _validate: BuildMakeValidator<DTO>
}
