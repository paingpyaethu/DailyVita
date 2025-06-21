import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, config, scaleHeight} from '@/theme';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({progress}: ProgressBarProps) => {
  return (
    <View style={styles.track}>
      <View style={[styles.bar, {width: `${Math.round(progress * 100)}%`}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: scaleHeight(12),
    backgroundColor: colors.background,
    marginTop: config.spacing[20],
    overflow: 'hidden',
  },
  bar: {
    height: scaleHeight(12),
    backgroundColor: colors.primary,
    borderTopRightRadius: config.spacing[8],
    borderBottomRightRadius: config.spacing[8],
  },
});

export default ProgressBar;
