import {
  Allergy,
  FinalResult,
  GetPersonalized,
  Welcome,
} from '@/components/organisms';
import Diets from '@/components/organisms/Diets/Diets';
import HealthConcerns from '@/components/organisms/HealthConcerns/HealthConcerns';
import {useAppDispatch} from '@/hooks/useAppDispatch';
import {useAppSelector} from '@/hooks/useAppSelector';
import {updateFormData} from '@/store/onboarding/slice';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, BackHandler} from 'react-native';

const OnboardingFlowScreen = () => {
  const [step, setStep] = useState(0);
  const formData = useAppSelector(state => state.onboarding);
  const dispatch = useAppDispatch();

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  const handleNext = (data: Partial<typeof formData>) => {
    dispatch(updateFormData(data));
    next();
  };

  const handleFinish = (data: Partial<typeof formData>) => {
    dispatch(updateFormData(data));
    setStep(5);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      {step === 0 && <Welcome onNext={next} />}
      {step === 1 && (
        <HealthConcerns
          healthConcernsData={formData}
          onBack={back}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <Diets data={formData} onBack={back} onNext={handleNext} />
      )}
      {step === 3 && (
        <Allergy data={formData} onBack={back} onNext={handleNext} />
      )}
      {step === 4 && <GetPersonalized onBack={back} onNext={handleFinish} />}
      {step === 5 && <FinalResult />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default OnboardingFlowScreen;
