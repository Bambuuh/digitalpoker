import { GameState, GameActions, GameActionsKeys } from './types'

const INITIAL_STATE: GameState = {
  id: null,
  players: {}
}

export default (state = INITIAL_STATE, action: GameActions) => {
  switch (action.type) {
    case GameActionsKeys.SET_GAME:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
