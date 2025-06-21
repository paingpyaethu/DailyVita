import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemedButton, ThemedText} from '@/components/atoms';
import {config} from '@/theme';

interface FormNavigationFooterProps {
  onBack: () => void;
  onNext: () => void;
}

const FormNavigationFooter = ({onBack, onNext}: FormNavigationFooterProps) => {
  return (
    <View style={styles.footer}>
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
    </View>
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
    marginLeft: config.spacing[16],
    paddingHorizontal: config.spacing[26],
  },
});

export default FormNavigationFooter;
