import styled from 'styled-components/native'
import theme from '../../theme'

export const ButtonTouchable = styled.TouchableOpacity`
  width: 100%;
`

export const ButtonContainer = styled.View`
  height: 40px;
  border-radius: 4px;
  background-color: ${theme.primary.color};
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.primary.onColor};
`
