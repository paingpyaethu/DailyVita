import {
  AnimatedListItemView,
  ThemedButton,
  ThemedText,
} from '@/components/atoms';
import {config, scaleHeight} from '@/theme';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {FadeInLeft} from 'react-native-reanimated';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome = ({onNext}: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <AnimatedListItemView index={0}>
        <ThemedText size="fs_30" weight="Nunito_bold">
          Welcome to DailyVita
        </ThemedText>
      </AnimatedListItemView>
      <AnimatedListItemView index={1}>
        <ThemedText
          size="fs_20"
          weight="Nunito_bold"
          marginTop={config.spacing[10]}>
          Hello, we are here to make your life healthier and happier
        </ThemedText>
      </AnimatedListItemView>
      <AnimatedListItemView index={2} entering={FadeInLeft.delay(200)}>
        <Image
          source={require('@/assets/images/welcome.png')}
          style={styles.image}
        />
      </AnimatedListItemView>
      <AnimatedListItemView index={3}>
        <ThemedText size="fs_18" weight="Nunito_medium">
          We will ask a couple of questions to better understand your vitamin
          need.
        </ThemedText>
      </AnimatedListItemView>
      <AnimatedListItemView index={4}>
        <ThemedButton onPress={onNext} style={{marginTop: config.spacing[100]}}>
          <ThemedText color="white">Get started</ThemedText>
        </ThemedButton>
      </AnimatedListItemView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: config.spacing[20],
    backgroundColor: '#d3f3e5',
  },
  image: {
    width: '100%',
    height: scaleHeight(250),
    resizeMode: 'contain',
    marginVertical: config.spacing[40],
  },
});

export default Welcome;
