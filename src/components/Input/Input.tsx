import React, { FunctionComponent } from 'react'
import { InputContainer, InputField, InputLabel, InputWrapper } from './styled'
import { ViewProps } from 'react-native'

type OwnProps = {
  label?: string
  value: string
  onChangeText: (value: string) => void
}

type Props = OwnProps & ViewProps

const Input: FunctionComponent<Props> = ({
  style,
  label,
  value,
  onChangeText
}) => {
  return (
    <InputWrapper style={style}>
      {label && <InputLabel>{label}</InputLabel>}
      <InputContainer>
        <InputField value={value} onChangeText={onChangeText} />
      </InputContainer>
    </InputWrapper>
  )
}

export default Input
