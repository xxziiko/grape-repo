import { flexStyles } from '@/shared';
import * as stylex from '@stylexjs/stylex';
import type {
  CompiledStyles,
  StyleXArray,
} from '@stylexjs/stylex/lib/StyleXTypes';
import { memo } from 'react';

const PageLayout = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleXArray<boolean | CompiledStyles | null | undefined>;
}) => {
  return (
    <div {...stylex.props(flexStyles.column, styles.box, style)}>
      {children}
    </div>
  );
};

export default memo(PageLayout);

const styles = stylex.create({
  box: {
    padding: '0 24px',
    height: '100%',
  },
});
