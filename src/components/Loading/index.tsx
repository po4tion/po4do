import { useRive } from '@rive-app/react-canvas';
import { create, props, type StyleXStyles } from '@stylexjs/stylex';
import { forwardRef } from 'react';

const loadingStyles = create({
  container: {
    width: '10rem',
    aspectRatio: 1 / 1,
  },
});

type Props = {
  width?: StyleXStyles<{
    width: `${number}rem`;
  }>;
};

/**
 * @param width 'rem' 단위의 너비를 입력합니다
 */
export const Loading = forwardRef<HTMLDivElement, Props>(({ width }, ref) => {
  const { RiveComponent } = useRive({
    src: 'assets/rive/loading.riv',
    autoplay: true,
  });

  return (
    <div ref={ref} {...props(loadingStyles.container, width)}>
      <RiveComponent />
    </div>
  );
});
