import { ContentExperience } from '@lib/db';

export enum ThemeColor {
  red = 'bg-primary-red',
  green = 'bg-primary-green-2',
  blue = 'bg-primary-blue-3',
  lightBlue = 'bg-primary-blue-1',
  yellow = 'bg-primary-yellow',
  orange = 'bg-primary-orange',
  purple = 'bg-primary-purple-1',
  gray = 'bg-primary-gray-4',
}

export function mapColor(color: string): ThemeColor {
  const themeColor = ThemeColor[color as keyof typeof ThemeColor];

  return themeColor || ThemeColor.gray;
}

export function mapExperience(experience: ContentExperience): ThemeColor {
  switch (experience) {
    case ContentExperience.ZERO:
    case ContentExperience.BASIC:
      return ThemeColor.yellow;
    case ContentExperience.INTERMEDIATE:
      return ThemeColor.orange;
    case ContentExperience.EXPERT:
    default:
      return ThemeColor.red;
  }
}

export default mapColor;
