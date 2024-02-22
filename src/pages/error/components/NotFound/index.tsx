import { useRive } from '@rive-app/react-canvas';
import { props, type StyleXStyles } from '@stylexjs/stylex';

type Props = {
  style: StyleXStyles;
};

export const NotFound = ({ style }: Props) => {
  const { RiveComponent } = useRive({
    src: 'assets/rive/notFound.riv',
    autoplay: true,
    animations: ['Idle'],
  });

  return (
    <div {...props(style)}>
      <RiveComponent />
    </div>
  );
};
