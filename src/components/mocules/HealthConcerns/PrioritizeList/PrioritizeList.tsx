import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {ThemedText} from '@/components/atoms';
import {colors, config} from '@/theme';
import {scaled} from '@/utils/helper';

interface PrioritizedListProps {
  items: string[];
  onReorder: (data: string[]) => void;
}

const PrioritizedList = ({items, onReorder}: PrioritizedListProps) => {
  return (
    <DraggableFlatList
      data={items}
      keyExtractor={item => item}
      onDragEnd={({data}) => onReorder(data)}
      renderItem={({item, drag, isActive, getIndex}) => (
        <Animated.View entering={FadeInDown.delay((getIndex() ?? 0) * 400)}>
          <TouchableOpacity
            style={[styles.item, isActive && {opacity: 0.5}]}
            onLongPress={drag}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <ThemedText
                size="fs_14"
                color={isActive ? 'black' : 'white'}
                backgroundColor={isActive ? 'transparent' : colors.primary}
                borderRadius={config.spacing[120]}
                paddingVertical={config.spacing[4]}
                paddingHorizontal={config.spacing[12]}>
                {item}
              </ThemedText>
              <Image
                source={require('@/assets/images/menu.png')}
                style={{...scaled(24)}}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    height: config.spacing[50],
    justifyContent: 'center',
    paddingHorizontal: config.spacing[10],
    backgroundColor: colors.backgroundLight,
    borderWidth: config.spacing[1],
    borderRadius: config.spacing[8],
    marginBottom: config.spacing[8],
  },
});

export default PrioritizedList;
