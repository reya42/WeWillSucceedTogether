import { Animated, ViewStyle, StyleSheet } from 'react-native';

interface SectionProps {
  scrollY: Animated.Value;
  index: number;
  height: number;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ scrollY, index, height, children }) => {
  // inputRange covers [startStick, endStick]
  const start = index * height;
  const end   = (index + 1) * height;

  // translateY: 0 until we reach start, then negative delta until end, then full scroll off
  const translateY = scrollY.interpolate({
    inputRange: [start, end],
    outputRange: [0, 0],
    // as soon as scrollY > end, translateY = -(scrollY - end),
    extrapolate: 'clamp'
  });

  const offscreen = scrollY.interpolate({
    inputRange: [end, end + 1],
    outputRange: [0, -1],
    extrapolate: 'clamp'
  });

  const style: ViewStyle = {
    height,
    transform: [{ translateY }, { translateY: offscreen }],
    zIndex: 1000 - index,       // ensure section on top in order
    position: 'absolute',
    top: index * height,
    left: 0,
    right: 0,
  };

  return <Animated.View style={[styles.section, style]}>{children}</Animated.View>;
};

const styles = StyleSheet.create({
  section: {
    overflow: 'hidden',
  },
});

export default Section;
