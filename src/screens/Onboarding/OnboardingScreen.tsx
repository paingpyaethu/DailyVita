import {Welcome} from '@/components/organisms';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

export type FormData = {
  healthConcerns: string[];
  prioritizedConcerns: string[];
  diets: string[];
  allergies: string[];
  sunExposure: boolean | null;
  smoke: boolean | null;
  alcohol: '0-1' | '2-5' | '5+' | null;
};

const OnboardingScreen = () => {
  const [step, setStep] = useState(0);

  const next = () => setStep(s => s + 1);
  return (
    <View style={styles.container}>
      {step === 0 && <Welcome onNext={next} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default OnboardingScreen;
