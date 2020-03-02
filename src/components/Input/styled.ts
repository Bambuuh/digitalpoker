import styled from 'styled-components/native'
import Color from 'color'
import theme from '../../theme'

export const InputWrapper = styled.View`
  width: 100%;
`

export const InputLabel = styled.Text`
  margin-bottom: ${theme.baseline / 2}px;
  color: ${theme.background.onColor};
`

export const InputContainer = styled.View`
  background-color: ${Color(theme.background.color)
    .lighten(0.6)
    .toString()};
  border-radius: 4px;
  width: 100%;
`

export const InputField = styled.TextInput`
  padding: 0 ${theme.baseline}px;
  color: ${theme.background.onColor};
  height: 40px;
`
