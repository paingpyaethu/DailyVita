import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemedButton, ThemedText} from '@/components/atoms';
import {config} from '@/theme';
import Animated, {FadeInDown} from 'react-native-reanimated';

interface FormNavigationFooterProps {
  onBack?: () => void;
  onNext: () => void;
  nextBtnLabel?: string;
  hideBack?: boolean;
}

const FormNavigationFooter = ({
  onBack,
  onNext,
  nextBtnLabel,
  hideBack,
}: FormNavigationFooterProps) => {
  return (
    <Animated.View entering={FadeInDown} style={styles.footer}>
      {!hideBack && (
        <ThemedButton
          onPress={onBack || (() => {})}
          type="transparent"
          style={styles.backBtn}>
          <ThemedText color="secondary" weight="Nunito_bold">
            Back
          </ThemedText>
        </ThemedButton>
      )}
      <ThemedButton onPress={onNext} type="secondary" style={styles.nextBtn}>
        <ThemedText weight="Nunito_bold" color="white">
          {nextBtnLabel || 'Next'}
        </ThemedText>
      </ThemedButton>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: config.spacing[60],
  },
  backBtn: {
    marginRight: config.spacing[40],
  },
  nextBtn: {
    paddingHorizontal: config.spacing[30],
  },
});

export default FormNavigationFooter;
