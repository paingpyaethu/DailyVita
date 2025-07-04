import {colors, config, scaleHeight, scaleWidth} from '@/theme';
import Svg, {Circle, Path, Rect, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
}

export const InfoCircleIcon = ({...props}: IconProps) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      width={scaleWidth(20)}
      height={scaleHeight(20)}
      {...props}>
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke={colors.cyan}
        strokeWidth={config.spacing[2]}
      />
      <Path
        stroke={colors.cyan}
        strokeLinecap="round"
        strokeWidth={config.spacing[2]}
        d="M12 17v-6"
      />
      <Circle
        cx={1}
        cy={1}
        r={1}
        fill={colors.cyan}
        transform="matrix(1 0 0 -1 11 9)"
      />
    </Svg>
  );
};

export const CheckBoxOutlineIcon = ({...props}: IconProps) => {
  return (
    <Svg
      fill={colors.primary}
      stroke={colors.primary}
      viewBox="0 0 512 512"
      width={props.width || scaleWidth(24)}
      height={props.height || scaleHeight(24)}
      {...props}>
      <Rect
        width={384}
        height={384}
        x={64}
        y={64}
        rx={48}
        ry={48}
        fill="none"
        stroke={colors.primary}
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
};

export const CheckBoxIcon = ({...props}: IconProps) => {
  return (
    <Svg
      fill="#2f435d"
      stroke="#2f435d"
      viewBox="0 0 512 512"
      width={props.width || scaleWidth(24)}
      height={props.height || scaleHeight(24)}
      {...props}>
      <Path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64Zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58Z" />
    </Svg>
  );
};

export const RadioButtonIcon = ({...props}: IconProps) => {
  return (
    <Svg
      fill={colors.primary}
      viewBox="0 0 24 24"
      width={props.width || scaleWidth(24)}
      height={props.height || scaleHeight(24)}
      {...props}>
      <Path
        fill={colors.primary}
        fillRule="nonzero"
        d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm0 1.5a8.502 8.502 0 1 0 0 17.003A8.502 8.502 0 0 0 12 3.5Zm-.003 2.5a5.998 5.998 0 1 1 0 11.996 5.998 5.998 0 0 1 0-11.996Z"
      />
    </Svg>
  );
};

export const RadioOutlineButtonIcon = ({...props}: IconProps) => {
  return (
    <Svg
      fill={colors.primary}
      viewBox="0 0 24 24"
      width={props.width || scaleWidth(24)}
      height={props.height || scaleHeight(24)}
      {...props}>
      <Path
        fill={colors.primary}
        fillRule="nonzero"
        d="M12 22.002c5.524 0 10.002-4.478 10.002-10.001 0-5.524-4.478-10.002-10.002-10.002-5.524 0-10.002 4.478-10.002 10.002 0 5.523 4.478 10.001 10.002 10.001Zm0-1.5A8.502 8.502 0 1 1 12 3.5a8.502 8.502 0 0 1 0 17.003Z"
      />
    </Svg>
  );
};
