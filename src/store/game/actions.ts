import { Game, GameActionsKeys } from './types'

export const setGameAction = (game: Game) => ({
  type: GameActionsKeys.SET_GAME,
  payload: game
})
