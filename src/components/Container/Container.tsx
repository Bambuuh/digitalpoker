import React, { FunctionComponent } from 'react'
import { ViewProps, SafeAreaView, View } from 'react-native'
import theme from '../../theme'

type OwnProps = {
  safe?: boolean
}

type Props = OwnProps & ViewProps

export const ScreenContainer: FunctionComponent<Props> = ({
  style,
  children,
  safe
}) => {
  const Wrapper = safe ? SafeAreaView : View

  return (
    <Wrapper style={[{ padding: theme.baseline }, style]}>{children}</Wrapper>
  )
}
