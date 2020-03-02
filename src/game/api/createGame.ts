import database from '@react-native-firebase/database'
import { getUniqueId } from 'react-native-device-info'
import { Alert } from 'react-native'

function generateId() {
  return [...Array(6)]
    .map(() => Math.random().toString(36)[2])
    .join('')
    .replace('0', 'O')
    .toUpperCase()
}

async function createGame() {
  try {
    let id = generateId()
    const games = await database()
      .ref('/games')
      .once('value')
    while (games.hasChild(id)) {
      id = generateId()
    }
    const uid = getUniqueId()
    await database()
      .ref(`/games/${id}`)
      .set({
        players: {
          [uid]: {
            id: uid
          }
        }
      })
  } catch (error) {
    Alert.alert('Could not create game')
  }
}

export default createGame
