import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemedText} from '@/components/atoms';
import {config, colors} from '@/theme';
import {RadioButtonIcon, RadioOutlineButtonIcon} from '@/utils/svg/icon.common';

interface RadioGroupProps {
  label: string;
  options: {label: string; value: string | boolean}[];
  selectedValue: string | boolean;
  onSelect: (value: string | boolean) => void;
  error?: string;
}

const RadioGroup = ({
  label,
  options,
  selectedValue,
  onSelect,
  error,
}: RadioGroupProps) => {
  return (
    <View style={styles.container}>
      <ThemedText
        size="fs_18"
        weight="Nunito_semibold"
        marginBottom={config.spacing[10]}>
        {label}
        <ThemedText color="secondary" weight="Nunito_bold">
          {' '}
          *
        </ThemedText>
      </ThemedText>

      {options.map(option => (
        <TouchableOpacity
          key={option.value.toString()}
          onPress={() => onSelect(option.value)}
          style={styles.optionRow}>
          {selectedValue === option.value ? (
            <RadioButtonIcon />
          ) : (
            <RadioOutlineButtonIcon />
          )}
          <ThemedText>{option.label}</ThemedText>
        </TouchableOpacity>
      ))}

      {error && (
        <ThemedText
          size="fs_14"
          color="secondary"
          marginTop={config.spacing[4]}>
          {error}
        </ThemedText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: config.spacing[20],
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.spacing[8],
    marginBottom: config.spacing[12],
  },
  radioCircle: {
    width: config.spacing[20],
    height: config.spacing[20],
    borderRadius: config.spacing[10],
    borderWidth: config.spacing[2],
    borderColor: colors.primary,
  },
  radioSelected: {
    backgroundColor: colors.primary,
  },
});

export default RadioGroup;
