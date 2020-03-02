import React, { FunctionComponent } from 'react'
import { ViewProps } from 'react-native'
import { ButtonContainer, ButtonText, ButtonTouchable } from './styled'

type OwnProps = {
  title: string
  onPress: () => void
}

type Props = OwnProps & ViewProps

const Button: FunctionComponent<Props> = ({ title, style, onPress }) => {
  return (
    <ButtonTouchable onPress={onPress} style={style}>
      <ButtonContainer>
        <ButtonText>{title}</ButtonText>
      </ButtonContainer>
    </ButtonTouchable>
  )
}

export default Button
