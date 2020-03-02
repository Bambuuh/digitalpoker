import { Action } from 'redux'

export enum GameActionsKeys {
  SET_GAME = 'SET_GAME'
}

export interface Game {
  id: string
}

export interface Player {
  id: string
}

export interface PlayerMap {
  [id: string]: Player
}

export interface GameState {
  id: string
  players: PlayerMap
}

export interface SetGameAction extends Action {
  type: GameActionsKeys.SET_GAME
  payload: Game
}

export type GameActions = SetGameAction
