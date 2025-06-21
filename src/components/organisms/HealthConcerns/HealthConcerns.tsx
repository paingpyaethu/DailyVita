import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {
  FormNavigationFooter,
  ProgressBar,
  SelectableTagList,
} from '@/components/mocules';
import PrioritizedList from '@/components/mocules/HealthConcerns/PrioritizeList/PrioritizeList';
import {SafeScreen} from '@/components/template';
import {config} from '@/theme';
import {ThemedText} from '@/components/atoms';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {ALL_CONCERNS} from '@/constants/dummy';
import Animated, {BounceIn, FadeInLeft} from 'react-native-reanimated';

const schema = z.object({
  healthConcerns: z
    .array(z.string())
    .min(1, 'Please select at least one concern.')
    .max(5, 'You can select up to 5 concerns.'),
  prioritizedConcerns: z.array(z.string()),
});

type Schema = z.infer<typeof schema>;

interface HealthConcernsScreenProps {
  healthConcernsData: Schema;
  onNext: (data: Schema) => void;
  onBack: () => void;
}

const HealthConcernsScreen = ({
  healthConcernsData,
  onNext,
  onBack,
}: HealthConcernsScreenProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: healthConcernsData,
  });

  const selected = watch('healthConcerns');
  const prioritized = watch('prioritizedConcerns');

  const toggleConcern = (item: string) => {
    const exists = selected.includes(item);
    const updated = exists
      ? selected.filter((i: string) => i !== item)
      : [...selected, item].slice(0, 5);

    setValue('healthConcerns', updated, {shouldValidate: true});
    setValue('prioritizedConcerns', updated);
  };

  const onSubmit = (form: Schema) => {
    onNext(form);
  };

  return (
    <SafeScreen containerStyle={styles.container}>
      <Animated.View entering={BounceIn}>
        <ThemedText
          size="fs_20"
          weight="Nunito_semibold"
          marginTop={config.spacing[20]}
          marginBottom={config.spacing[10]}>
          Select the top health concerns.
          <ThemedText color="secondary" weight="Nunito_bold">
            *
          </ThemedText>{' '}
          (upto 5)
        </ThemedText>
      </Animated.View>
      <View>
        <SelectableTagList
          options={ALL_CONCERNS}
          selected={selected}
          onToggle={toggleConcern}
        />
      </View>

      {prioritized.length > 0 && (
        <Animated.View entering={FadeInLeft.delay(100)}>
          <ThemedText
            size="fs_18"
            weight="Nunito_bold"
            marginBottom={config.spacing[10]}
            marginTop={config.spacing[20]}>
            Prioritize
          </ThemedText>
        </Animated.View>
      )}
      <Controller
        control={control}
        name="prioritizedConcerns"
        render={({field: {value, onChange}}) => (
          <PrioritizedList items={value} onReorder={onChange} />
        )}
      />

      {errors.healthConcerns && (
        <ThemedText
          size="fs_14"
          color="secondary"
          marginTop={config.spacing[10]}>
          Please select at least one concern.
        </ThemedText>
      )}

      <View style={{flex: 1}} />

      <FormNavigationFooter onBack={onBack} onNext={handleSubmit(onSubmit)} />

      <ProgressBar progress={0.25} />
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {padding: config.spacing[20]},
});

export default HealthConcernsScreen;
