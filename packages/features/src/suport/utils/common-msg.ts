import { Fn } from './common.types'

import {
  ReasonPhrases,
  StatusCodes,
} from 'http-status-codes';

export interface MsgProps {
  code: number,
  msg: string,
  description: string
}

const MsgCode = Fn<Partial<MsgProps>>

export default class Msg {
  /**
   * get Sucess Messages
   */
  public Sucess() {
    return {
      ok: MsgCode({ code: StatusCodes.OK, msg: ReasonPhrases.OK, description: 'ok' }),
      serverExited: MsgCode({ code: StatusCodes.OK, msg: 'App exited with success', description: '' }),
      created: MsgCode({ code: StatusCodes.CREATED, msg: ReasonPhrases.CREATED, description: 'ok' }),
      authorized: MsgCode({ code: StatusCodes.OK, msg: ReasonPhrases.OK, description: 'autorizado' }),
    }
  }
  /**
   * Failure
   */
  public Failure() {
    return {
      serverError: MsgCode({ code: StatusCodes.INTERNAL_SERVER_ERROR, msg: ReasonPhrases.INTERNAL_SERVER_ERROR, description: 'Servidor c/ Erro' }),
      not_found: MsgCode({ code: StatusCodes.NOT_FOUND, msg: ReasonPhrases.NOT_FOUND, description: 'nao encontrado' }),
      no_context: MsgCode({ code: StatusCodes.NO_CONTENT, msg: ReasonPhrases.NO_CONTENT, description: 'sem conteudo' }),
      bad_request: MsgCode({ code: StatusCodes.BAD_REQUEST, msg: ReasonPhrases.BAD_REQUEST, description: 'requisicao invalida' }),
      no_accptable: MsgCode({ code: StatusCodes.NOT_ACCEPTABLE, msg: ReasonPhrases.NOT_ACCEPTABLE, description: 'nao aceito' }),
      unauthorized: MsgCode({ code: StatusCodes.UNAUTHORIZED, msg: ReasonPhrases.UNAUTHORIZED, description: 'nao autorizado' }),
      unhandledRejection: (reason: any, promisse: any) => MsgCode({ code: StatusCodes.NOT_ACCEPTABLE, msg: `App exiting due to an unhandled promise: ${promisse} and reason: ${reason} 👁️ `, description: `` }),
      uncaughtException: (error: any) => MsgCode({ code: StatusCodes.NOT_ACCEPTABLE, msg: `App exiting due to an uncaught exception: ${error} 👁️ `, description: `` }),
      serverExited: (error: any) => MsgCode({ code: StatusCodes.UNAUTHORIZED, msg: `App exited with error: ${error}`, description: '' }),
      execulteProcess: (error: any) => MsgCode({ code: StatusCodes.NOT_ACCEPTABLE, msg: `An error occured while execulte process => : ${error} 👁️ `, description: `` }),

    }
  }
}

