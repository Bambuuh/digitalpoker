import React, { FunctionComponent, useState } from 'react'
import Button from '../../components/Button'
import theme from '../../theme'
import { ScreenContainer } from '../../components/Container/Container'
import createGame from '../../game/api/createGame'
import Input from '../../components/Input'
import joinGame from '../../game/api/joinGame'

export const Home: FunctionComponent = () => {
  const [gameId, setGameId] = useState('')

  const onChangeGameId = (value: string) => {
    setGameId(value.toUpperCase())
  }

  const onPressJoin = () => {
    joinGame(gameId)
  }

  const onPressCreate = () => {
    createGame()
  }

  return (
    <ScreenContainer>
      <Button
        style={{ marginBottom: theme.baseline }}
        onPress={onPressCreate}
        title="Create game"
      />
      <Input value={gameId} onChangeText={onChangeGameId} />
      <Button onPress={onPressJoin} title="Join game" />
    </ScreenContainer>
  )
}

export default Home
