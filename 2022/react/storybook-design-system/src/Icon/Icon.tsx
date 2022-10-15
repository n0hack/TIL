import React from 'react';
import * as icons from './svg';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

interface Props {
  icon: IconType;
  color?: string;
  size?: string | number;
  className?: string;
}

const Icon = ({ icon, className, color, size }: Props) => {
  const SVGIcon = icons[icon];

  return (
    <SVGIcon
      css={{ fill: color || 'currentColor', width: size, height: 'auto' }}
      className={className}
    />
  );
};

export default Icon;
