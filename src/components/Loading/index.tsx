import { useRive } from '@rive-app/react-canvas';
import { props, type StyleXStyles } from '@stylexjs/stylex';
import { forwardRef } from 'react';

type Props = {
  style?: StyleXStyles;
};

export const Loading = forwardRef<HTMLDivElement, Props>(({ style }, ref) => {
  const { RiveComponent } = useRive({
    src: 'assets/rive/loading.riv',
    autoplay: true,
  });

  return (
    <div ref={ref} {...props(style)}>
      <RiveComponent />
    </div>
  );
});
