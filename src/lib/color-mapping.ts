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
  const themeColor: ThemeColor | undefined = ThemeColor[color as keyof typeof ThemeColor];

  return themeColor ?? ThemeColor.gray;
}

export const experienceColorMap: Record<ContentExperience, ThemeColor> = {
  [ContentExperience.ZERO]: ThemeColor.yellow,
  [ContentExperience.BASIC]: ThemeColor.yellow,
  [ContentExperience.INTERMEDIATE]: ThemeColor.orange,
  [ContentExperience.EXPERT]: ThemeColor.red,
};

export const mapExperience = (experience: ContentExperience): ThemeColor => experienceColorMap[experience] ?? ThemeColor.red;

export default mapColor;
