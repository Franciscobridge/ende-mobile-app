import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export function EnergyUsageIndicator() {
  const consumption = 80;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 30 }}>
      <AnimatedCircularProgress
        size={120}
        width={10}
        fill={consumption}
        tintColor="#05df72"
        backgroundColor="#fee2e210"
      >
        {(fill: number) => (
          <View style={{ alignItems: 'center' }}>
            <Text className="font-bold text-xl text-green-400">{Math.round(fill)}%</Text>
            <Text className="font-bold text-foreground text-center text-xs">Consumo de Energia</Text>

          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}
