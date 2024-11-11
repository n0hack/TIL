
export const calculateRatio = (width, height, baseSize) => {
  const ratio = width > height ? 'landscape' : 'portrait';

  return {
    width: ratio === 'landscape' ? baseSize : Math.floor((width/height) * baseSize),
    height: ratio === 'portrait' ? baseSize : Math.floor((height/width) * baseSize),
  };
}
