import { globalTheme } from '@/styles/globalTheme';
import { CSSObject } from 'styled-components';
import styled from 'styled-components';

const { pallete } = globalTheme;

type ProgressBarProps = {
  progressRate: number;
  backgroundColor?: keyof typeof pallete;
  barColor?: keyof typeof pallete;
  height?: `${number}%` | number;
  width?: `${number}%` | number;
  styles?: CSSObject;
};

const DEFAULT_PROGRESS_BAR_PROPS: ProgressBarProps = {
  progressRate: 20,
  backgroundColor: 'grey5',
  barColor: 'primary',
  height: 20,
  width: '100%',
} as const;

const getWidthType = (value: number | string) =>
  typeof value === 'string' ? 'string' : 'number';

type AllowedWidthType = 'string' | 'number';

const calcWidthWithPercentage = (
  backgroundWidth: `${number}%`,
  barWidth: number,
) => {
  const parsedBackgroundWidth = Number(backgroundWidth.replace('%', ''));
  const result = `${barWidth * (parsedBackgroundWidth * 0.01)}%`;
  return result;
};

const calcWidthWidhtNumber = (backgroundWidth: number, barWidth: number) =>
  backgroundWidth * 0.01 * barWidth;

const calcProgressBarWidth: { [key in AllowedWidthType]: Function } = {
  string: calcWidthWithPercentage,
  number: calcWidthWidhtNumber,
};

export function ProgressBar(props: ProgressBarProps) {
  const progressBarProps = { ...DEFAULT_PROGRESS_BAR_PROPS, ...props };
  const { progressRate, width } = progressBarProps;

  const widthType = getWidthType(width!);

  const progressBarWidth = calcProgressBarWidth[widthType](width, progressRate);

  return (
    <Wrapper>
      <Background {...progressBarProps}></Background>
      <Progress {...progressBarProps} width={progressBarWidth}></Progress>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

type BackgroundProps = Pick<
  ProgressBarProps,
  'backgroundColor' | 'height' | 'width'
>;

const Background = styled.span<BackgroundProps>(
  ({ backgroundColor = 'grey5', height, width, theme }) => ({
    position: 'absolute',
    backgroundColor: theme.pallete[backgroundColor],
    width,
    height,
    borderRadius: 9999999,
  }),
);

type ProgressProps = Pick<ProgressBarProps, 'barColor' | 'height' | 'width'>;

const Progress = styled.span<ProgressProps>(
  ({ barColor = 'primary', height, width, theme }) => ({
    position: 'absolute',
    backgroundColor: theme.pallete[barColor],
    width,
    height,
    borderRadius: 9999999,
    zIndex: 2,
  }),
);
