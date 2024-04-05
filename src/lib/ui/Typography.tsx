import type { WithClassName } from '@/lib/types/generics';
import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import '@/styles/font-faces.css';

type FontFamily = 'anton' | 'sans';

type Props = PropsWithChildren<
  WithClassName<{
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    font?: FontFamily;
  }>
>;

const fontFamilies: Record<FontFamily, string> = {
  anton: 'Anton',
  sans: 'IBMPlexSans',
};

export function Typography({ tag = 'p', font = 'sans', children, className }: Props) {
  const Comp = tag;

  return (
    <Comp
      className={cn(className)}
      style={{
        fontFamily: fontFamilies[font],
      }}
    >
      {children}
    </Comp>
  );
}
