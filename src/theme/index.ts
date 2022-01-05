import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';
import buttonStyles from '../components/buttons/styles';
import inputStyles from '../components/inputs/styles';
import breakpoints from './breakpoints';
import * as colors from './colors';
import { primaryRing } from './commons';
import * as typography from './typography';

const theme = extendTheme(
  {
    colors: {
      ...colors.palette,
    },
    fonts: {
      ...typography.fonts,
    },
    fontSizes: { ...typography.fontSizes },
    fontWeights: { ...typography.fontWeights },
    lineHeights: { ...typography.lineHeights },
    letterSpacings: { ...typography.letterSpacings },
    breakpoints: { breakpoints },
    components: {
      Button: {
        ...buttonStyles,
      },
      Input: { ...inputStyles },
      Select: { ...inputStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',
            ...primaryRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'orange',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  }),
);

export default theme;
