import {ThemedText} from '@/components/atoms';
import {colors, config} from '@/theme';
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Animated, {FadeInDown, FadeOutUp} from 'react-native-reanimated';

interface SelectableTagListProps {
  options: string[];
  selected: string[];
  onToggle: (item: string) => void;
}

const SelectableTagList = ({
  options,
  selected,
  onToggle,
}: SelectableTagListProps) => {
  return (
    <View style={styles.container}>
      {options.map((item, index) => {
        const isSelected = selected.includes(item);
        return (
          <Animated.View
            key={item}
            entering={FadeInDown.delay(index * 40)}
            exiting={FadeOutUp}>
            <TouchableOpacity
              onPress={() => onToggle(item)}
              style={[styles.tag, isSelected && styles.tagSelected]}>
              <ThemedText size="fs_14" color={isSelected ? 'white' : 'black'}>
                {item}
              </ThemedText>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', flexWrap: 'wrap', gap: config.spacing[10]},
  tag: {
    backgroundColor: 'transparent',
    borderWidth: config.spacing[1],
    borderColor: colors.primary,
    paddingVertical: config.spacing[4],
    paddingHorizontal: config.spacing[12],
    borderRadius: config.spacing[120],
    marginHorizontal: config.spacing[4],
  },
  tagSelected: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
});

export default SelectableTagList;
