import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import {ThemedText} from '@/components/atoms';
import {config} from '@/theme';
import {
  CheckBoxIcon,
  CheckBoxOutlineIcon,
  InfoCircleIcon,
} from '@/utils/svg/icon.common';

interface DietOptionRowProps {
  option: {
    key: string;
    description: string;
  };
  index: number;
  selected: boolean;
  onToggle: (key: string) => void;
  tooltipIndex: number | null;
  setTooltipIndex: (index: number | null) => void;
}

const DietOptionRow = ({
  option,
  index,
  selected,
  onToggle,
  tooltipIndex,
  setTooltipIndex,
}: DietOptionRowProps) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => onToggle(option.key)}>
        {selected ? <CheckBoxIcon /> : <CheckBoxOutlineIcon />}
        <ThemedText weight="Nunito_semibold">{option.key}</ThemedText>
      </TouchableOpacity>

      {option.key !== 'None' && (
        <Tooltip
          isVisible={tooltipIndex === index}
          content={<ThemedText size="fs_12">{option.description}</ThemedText>}
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
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.spacing[8],
    marginBottom: config.spacing[18],
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: config.spacing[3],
  },
});

export default DietOptionRow;
