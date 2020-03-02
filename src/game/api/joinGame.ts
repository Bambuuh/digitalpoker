import database from '@react-native-firebase/database'
import { getUniqueId } from 'react-native-device-info'
import { Alert } from 'react-native'

async function joinGame(gameId: string) {
  try {
    const path = `/games/${gameId}`
    const game = await database()
      .ref(path)
      .once('value')
    if (!game.exists()) {
      return Alert.alert(`Could not find game ${gameId}`)
    }

    const uid = getUniqueId()
    await database()
      .ref(`${path}/players`)
      .update({
        [uid]: uid
      })
  } catch (error) {
    Alert.alert(`Error joining game ${gameId}`)
  }
}

export default joinGame
