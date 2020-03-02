import database from '@react-native-firebase/database'
import { getUniqueId } from 'react-native-device-info'
import { Alert } from 'react-native'
import { store } from '../../store/store'
import { setGameAction } from '../../store/game/actions'
import { Game } from '../../store/game/types'

async function joinGame(gameId: string) {
  try {
    const path = `/games/${gameId}`
    const ref = database().ref(path)
    const game = await ref.once('value')
    if (!game.exists()) {
      return Alert.alert(`Could not find game ${gameId}`)
    }

    const uid = getUniqueId()
    await game.child('/players').ref.update({
      [uid]: uid
    })
    const updated = await ref.once('value')
    const updatedGame = updated.val() as Game
    store.dispatch(setGameAction(updatedGame))
  } catch (error) {
    Alert.alert(`Error joining game ${gameId}`)
  }
}

export default joinGame
