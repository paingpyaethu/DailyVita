import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormNavigationFooter, ProgressBar} from '@/components/mocules';
import {colors, config, FONT_FAMILY} from '@/theme';
import {SafeScreen} from '@/components/template';
import {ThemedText} from '@/components/atoms';
import Animated, {
  BounceIn,
  FadeInDown,
  FadeOutUp,
} from 'react-native-reanimated';

const MOCK_SUGGESTIONS = ['Nasacort', 'Nasalide', 'Nasonex'];

const schema = z.object({
  allergies: z.array(z.string()).optional(),
});

type Schema = z.infer<typeof schema>;

interface AllergyProps {
  data: Schema;
  onNext: (data: Schema) => void;
  onBack: () => void;
}

const Allergy = ({data, onNext, onBack}: AllergyProps) => {
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState<string[]>([]);

  const {control, handleSubmit, setValue, watch} = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  const allergies = watch('allergies') || [];

  const handleInputChange = (text: string) => {
    setInput(text);
    if (text.trim().length === 0) {
      setFiltered([]);
    } else {
      const matches = MOCK_SUGGESTIONS.filter(item =>
        item.toLowerCase().includes(text.toLowerCase()),
      );
      setFiltered([
        text,
        ...matches.filter(m => m.toLowerCase() !== text.toLowerCase()),
      ]);
    }
  };

  const handleAdd = (item: string) => {
    if (!allergies.includes(item)) {
      const updated = [...allergies, item];
      setValue('allergies', updated);
    }
    setInput('');
    setFiltered([]);
  };

  const handleRemove = (item: string) => {
    const updated = allergies.filter(i => i !== item);
    setValue('allergies', updated);
  };

  const onSubmit = (form: Schema) => {
    onNext(form);
  };

  return (
    <SafeScreen containerStyle={styles.container}>
      <Animated.View entering={BounceIn.delay(100)}>
        <ThemedText
          size="fs_20"
          weight="Nunito_semibold"
          marginTop={config.spacing[20]}
          marginBottom={config.spacing[20]}>
          Write any specific allergies or sensitivity towards specific things.
          (optional)
        </ThemedText>
      </Animated.View>

      <Controller
        control={control}
        name="allergies"
        render={() => (
          <View style={styles.inputWrapper}>
            <Animated.View
              entering={FadeInDown}
              style={[
                styles.inputWithTags,
                filtered.length > 0 && {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderBottomWidth: 0,
                },
              ]}>
              {allergies.map(tag => (
                <Animated.View
                  key={tag}
                  entering={FadeInDown.delay(100)}
                  exiting={FadeOutUp}>
                  <TouchableOpacity
                    style={styles.tag}
                    onPress={() => handleRemove(tag)}>
                    <ThemedText color="white">{tag}</ThemedText>
                  </TouchableOpacity>
                </Animated.View>
              ))}
              <TextInput
                value={input}
                onChangeText={handleInputChange}
                placeholder="Start typing..."
                style={styles.input}
              />
            </Animated.View>

            {filtered.length > 0 && (
              <Animated.View
                entering={FadeInDown}
                exiting={FadeOutUp}
                style={styles.suggestion}>
                <FlatList
                  data={filtered}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => handleAdd(item)}
                      style={{paddingVertical: config.spacing[6]}}>
                      <ThemedText>{item}</ThemedText>
                    </TouchableOpacity>
                  )}
                  keyboardShouldPersistTaps="handled"
                />
              </Animated.View>
            )}
          </View>
        )}
      />

      <View style={{flex: 1}} />
      <FormNavigationFooter onBack={onBack} onNext={handleSubmit(onSubmit)} />
      <ProgressBar progress={0.75} />
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {padding: config.spacing[20]},
  inputWrapper: {marginBottom: config.spacing[8]},
  inputWithTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: config.spacing[1],
    borderColor: colors.border,
    borderRadius: config.spacing[6],
    paddingHorizontal: config.spacing[8],
    paddingVertical: config.spacing[4],
    minHeight: config.spacing[50],
    gap: config.spacing[8],
  },
  tag: {
    backgroundColor: colors.primary,
    borderRadius: config.spacing[120],
    paddingHorizontal: config.spacing[12],
    paddingVertical: config.spacing[6],
    marginRight: config.spacing[8],
  },
  input: {
    flex: 1,
    fontFamily: FONT_FAMILY.Nunito_regular,
    ...config.fonts.fs_14,
  },
  suggestion: {
    paddingVertical: config.spacing[10],
    paddingHorizontal: config.spacing[12],
    borderWidth: config.spacing[1],
    borderColor: colors.border,
    borderBottomLeftRadius: config.spacing[6],
    borderBottomRightRadius: config.spacing[6],
    backgroundColor: colors.lightGray,
  },
});

export default Allergy;
