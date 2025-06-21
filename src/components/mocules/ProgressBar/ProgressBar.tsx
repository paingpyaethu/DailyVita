import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {colors, config, scaleHeight} from '@/theme';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({progress}: ProgressBarProps) => {
  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = progress;
  }, [progress, animatedProgress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: withSpring(`${Math.round(animatedProgress.value * 100)}%`, {
      stiffness: 180,
      damping: 12,
    }),
    backgroundColor: colors.primary,
  }));

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View style={[styles.progressBar, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: scaleHeight(12),
    backgroundColor: colors.background,
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderTopRightRadius: config.spacing[8],
    borderBottomRightRadius: config.spacing[8],
  },
});

export default ProgressBar;
