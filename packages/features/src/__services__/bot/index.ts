import { BuildMakeValidator, DTO, SwissArmyKnife, FactorySwissArmyKnife, SuccessOrFailure, FactoryMakeProps } from '@src/index'

//DTO
export type BotDTO = DTO & Partial<{
  presentation: string
}>

//Validate

export class BotValidator extends BuildMakeValidator<BotDTO> {
  MakeSchema(): void {
    this._schema = this._buildSchema.object({
      idObject: this._buildSchema.string(),
      presentation: this._buildSchema.string().optional(),
    })
  }
}

//Factory with services

const FactoryBot = (_props: FactoryMakeProps<BotDTO>) => {
  const { _validate } = _props
  const { getUtils } = _props._swArKnife


  function sayHi(user: any) {
    return (`Hello, ${user}!`);
  }  // no ; at the end

  return {
    test: () => getUtils().makeID(),
    sayHi,
    getSchema: _validate
  }
}

const Props: FactoryMakeProps<BotDTO> = {
  _validate: new BotValidator(),
  _swArKnife: new FactorySwissArmyKnife()
}

//Itens

export const BotServices = FactoryBot(Props)


