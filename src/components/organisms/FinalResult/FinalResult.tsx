import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ThemedText} from '@/components/atoms';
import {SafeScreen} from '@/components/template';
import {config} from '@/theme';
import {useAppSelector} from '@/hooks/useAppSelector';

import {ALL_CONCERNS, DIET_OPTIONS} from '@/constants/dummy';

const transformSummary = (formData: any) => {
  const health_concerns = formData.prioritizedConcerns.map(
    (name: string, index: number) => {
      const foundIndex = ALL_CONCERNS.findIndex(c => c === name);
      return {
        id: foundIndex >= 0 ? foundIndex + 1 : index + 1,
        name,
        priotity: index + 1,
      };
    },
  );

  const diets = formData.diets.map((key: string, index: number) => {
    const found = DIET_OPTIONS.find(option => option.key === key);
    return {
      id: index + 1,
      name: key,
      description: found?.description ?? '',
    };
  });

  const allergies = formData.allergies.map((name: string, index: number) => ({
    id: index + 1,
    name,
  }));

  return {
    health_concerns,
    diets,
    is_daily_exposure: formData.is_daily_exposure,
    is_smoke: formData.is_smoke,
    alcohol: formData.alcohol,
    allergies,
  };
};

const FinalResult = () => {
  const formData = useAppSelector(state => state.onboarding);
  const transformed = transformSummary(formData);

  return (
    <SafeScreen containerStyle={styles.container}>
      <ThemedText
        size="fs_20"
        weight="Nunito_bold"
        marginVertical={config.spacing[20]}>
        Final Result Output
      </ThemedText>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemedText selectable size="fs_16">
          {JSON.stringify(transformed, null, 2)}
        </ThemedText>
      </ScrollView>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: config.spacing[20],
  },
});

export default FinalResult;
