import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemedButton, ThemedText} from '@/components/atoms';
import {config} from '@/theme';
import Animated, {FadeInDown} from 'react-native-reanimated';

interface FormNavigationFooterProps {
  onBack: () => void;
  onNext: () => void;
}

const FormNavigationFooter = ({onBack, onNext}: FormNavigationFooterProps) => {
  return (
    <Animated.View entering={FadeInDown} style={styles.footer}>
      <ThemedButton onPress={onBack} type="transparent">
        <ThemedText color="secondary" weight="Nunito_bold">
          Back
        </ThemedText>
      </ThemedButton>
      <ThemedButton onPress={onNext} type="secondary" style={styles.next}>
        <ThemedText weight="Nunito_bold" color="white">
          Next
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
  next: {
    marginLeft: config.spacing[40],
    paddingHorizontal: config.spacing[30],
  },
});

export default FormNavigationFooter;
