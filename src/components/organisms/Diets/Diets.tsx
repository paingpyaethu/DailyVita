import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormNavigationFooter, ProgressBar} from '@/components/mocules';
import {config} from '@/theme';
import {SafeScreen} from '@/components/template';
import {ThemedText} from '@/components/atoms';
import {
  CheckBoxIcon,
  InfoCircleIcon,
  CheckBoxOutlineIcon,
} from '@/utils/svg/icon.common';
import {DIET_OPTIONS} from '@/constants/dummy';
import Tooltip from 'react-native-walkthrough-tooltip';

const schema = z.object({
  diets: z.array(z.string()).min(1, 'Please select at least one option.'),
});

type Schema = z.infer<typeof schema>;

interface DietsProps {
  data: Schema;
  onNext: (data: Schema) => void;
  onBack: () => void;
}

const Diets = ({data, onNext, onBack}: DietsProps) => {
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  const selected = watch('diets') || [];

  const toggleOption = (key: string) => {
    let updated: string[] = [];
    if (key === 'None') {
      updated = ['None'];
    } else {
      updated = selected.includes(key)
        ? selected.filter(item => item !== key)
        : [...selected.filter(item => item !== 'None'), key];
    }
    setValue('diets', updated, {shouldValidate: true});
  };

  const onSubmit = (form: Schema) => {
    const filtered = form.diets.includes('None') ? [] : form.diets;
    onNext({diets: filtered});
  };

  return (
    <SafeScreen containerStyle={styles.container}>
      <ThemedText
        size="fs_20"
        weight="Nunito_semibold"
        marginTop={config.spacing[20]}
        marginBottom={config.spacing[10]}>
        Select the diets you follow.
        <ThemedText color="secondary" weight="Nunito_bold">
          *
        </ThemedText>
      </ThemedText>

      {DIET_OPTIONS.map((option, index) => (
        <View key={option.key} style={styles.row}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: config.spacing[3],
            }}
            onPress={() => toggleOption(option.key)}>
            {selected.includes(option.key) ? (
              <CheckBoxIcon />
            ) : (
              <CheckBoxOutlineIcon />
            )}
            <ThemedText weight="Nunito_semibold">{option.key}</ThemedText>
          </TouchableOpacity>
          {option.key !== 'None' && (
            <Tooltip
              isVisible={tooltipIndex === index}
              content={
                <ThemedText size="fs_12">{option.description}</ThemedText>
              }
              placement="right"
              onClose={() => setTooltipIndex(null)}
              showChildInTooltip={false}
              arrowStyle={{marginTop: -config.spacing[35]}}
              contentStyle={{
                bottom: config.spacing[35],
                height:
                  option.description.length > 70
                    ? config.spacing[120]
                    : config.spacing[60],
                alignItems: 'center',
                justifyContent: 'center',
              }}
              childContentSpacing={config.spacing[10]}
              backgroundColor="rgba(0,0,0,0.1)">
              <TouchableOpacity onPress={() => setTooltipIndex(index)}>
                <InfoCircleIcon />
              </TouchableOpacity>
            </Tooltip>
          )}
        </View>
      ))}

      {errors.diets && (
        <ThemedText
          size="fs_14"
          color="secondary"
          marginTop={config.spacing[10]}>
          {errors.diets.message}
        </ThemedText>
      )}

      <View style={{flex: 1}} />

      <FormNavigationFooter onBack={onBack} onNext={handleSubmit(onSubmit)} />
      <ProgressBar progress={0.5} />
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {padding: config.spacing[20]},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.spacing[8],
    marginBottom: config.spacing[18],
  },
});

export default Diets;
