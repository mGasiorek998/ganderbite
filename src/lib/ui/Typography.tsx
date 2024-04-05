import type { WithClassName } from '@/lib/types/generics';
import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import '@/styles/font-faces.css';

type FontFamily = 'anton' | 'sans';
type FontSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type Props = PropsWithChildren<
  WithClassName<{
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    font?: FontFamily;
    size?: FontSize;
  }>
>;

const fontFamilies: Record<FontFamily, string> = {
  anton: 'Anton',
  sans: 'IBMPlexSans',
};

const sizeClasses: Record<FontSize, string> = {
  '2xl': 'text-[23.2vw] tracking-tight leading-none',
  xl: 'text-[9vw] md:text-[5vw] lg:text-[4.5vw] leading-none',
  lg: 'text-[5vw] md:text-[2.5vw] lg:text-[2vw]',
  md: 'text-[4vw] md:text-[1.5vw]',
  sm: 'text-[3vw] md:text-[1.5vw]',
};

export function Typography({
  tag = 'p',
  font = 'sans',
  children,
  className,
  size = 'md',
  ...restProps
}: Props) {
  const Comp = tag;

  return (
    <Comp
      className={cn(className, sizeClasses[size])}
      style={{
        fontFamily: fontFamilies[font],
      }}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
