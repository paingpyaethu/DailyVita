import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {SafeScreen} from '@/components/template';
import {
  FormNavigationFooter,
  ProgressBar,
  RadioGroup,
} from '@/components/mocules';
import {config} from '@/theme';

const schema = z.object({
  is_daily_exposure: z.boolean(),
  is_smoke: z.boolean(),
  alcohol: z.union([z.literal('0-1'), z.literal('2-5'), z.literal('5+')]),
});

type Schema = z.infer<typeof schema>;

interface GetPersonalizedProps {
  onNext: (data: Schema) => void;
  onBack: () => void;
}

const GetPersonalized = ({onNext, onBack}: GetPersonalizedProps) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      is_daily_exposure: false,
      is_smoke: false,
      alcohol: '0-1',
    },
  });

  const values = watch();

  const onSubmit = (form: Schema) => {
    onNext(form);
  };

  return (
    <SafeScreen containerStyle={styles.container}>
      <View style={{justifyContent: 'center', marginTop: config.spacing[40]}}>
        <RadioGroup
          label="Is your daily exposure to sun is limited?"
          options={[
            {label: 'Yes', value: true},
            {label: 'No', value: false},
          ]}
          selectedValue={values.is_daily_exposure}
          onSelect={val =>
            setValue('is_daily_exposure', Boolean(val), {shouldValidate: true})
          }
          error={errors.is_daily_exposure?.message}
        />

        <RadioGroup
          label="Do you currently smoke (tobacco or marijuana)?"
          options={[
            {label: 'Yes', value: true},
            {label: 'No', value: false},
          ]}
          selectedValue={values.is_smoke}
          onSelect={val =>
            setValue('is_smoke', Boolean(val), {shouldValidate: true})
          }
          error={errors.is_smoke?.message}
        />

        <RadioGroup
          label="On average, how many alcoholic beverages do you have in a week?"
          options={[
            {label: '0 - 1', value: '0-1'},
            {label: '2 - 5', value: '2-5'},
            {label: '5+', value: '5+'},
          ]}
          selectedValue={values.alcohol}
          onSelect={val =>
            setValue('alcohol', val as '0-1' | '2-5' | '5+', {
              shouldValidate: true,
            })
          }
          error={errors.alcohol?.message}
        />
      </View>

      <View style={{flex: 1}} />

      <FormNavigationFooter
        onBack={onBack}
        onNext={handleSubmit(onSubmit)}
        nextBtnLabel="Get my personalized vitamin"
        hideBack
      />

      <ProgressBar progress={10} />
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: config.spacing[20],
  },
});

export default GetPersonalized;
