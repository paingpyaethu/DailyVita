import {ColorSchemeName} from 'react-native';

export const colors = {
  primary: '#2f435d',
  secondary: '#fe624e',
  white: '#FFFFFF',
  black: '#000000',
  cyan: '#179ebc',
  gray: '#808080',
  lightGray: '#f4f4f4',
  darkGray: '#505050',
  background: '#d3f3e5',
  backgroundLight: '#e9fbf4',
  border: '#e5e5e5',
};

export type Palette = (typeof colors)[keyof typeof colors];

export type Theme = ColorSchemeName | keyof typeof colors;
