import type { WithClassName } from '@/lib/types/generics';
import { icons } from '@/lib/ui/icons';
import { cn } from '@/lib/utils';

type Icon = keyof typeof icons;

type Props = {
  icon: Icon;
  size?: 'sm' | 'lg';
};

const sizes = {
  sm: 'size-8',
  lg: 'size-16',
};

export function Icon({ icon, size = 'sm', className }: WithClassName<Props>) {
  const IconComp = icons[icon];

  return (
    <span
      className={cn('block transition-colors hover:text-orange-400', sizes[size], className)}
      aria-hidden="true"
    >
      <IconComp />
    </span>
  );
}
