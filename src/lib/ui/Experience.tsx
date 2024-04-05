import { Typography } from '@/lib/ui/Typography';
import { cn } from '@/lib/utils';

type Props = {
  from: string;
  to?: string;
  companyName: string;
  position?: string;
  special?: boolean;
};

export function Experience({ from, to, companyName, position, special = false }: Props) {
  return (
    <li className="flex basis-full flex-col md:flex-1">
      <Typography font="anton" size="xl" className="select-none text-neutral-500">
        {from} - {to ?? 'PRESENT'}
      </Typography>
      <Typography
        font="anton"
        size="xl"
        tag="h3"
        className={cn('leading-none', {
          'text-orange-400': special,
        })}
      >
        {companyName}
      </Typography>
      {!!position && (
        <Typography font="sans" className="leading-none text-neutral-500">
          {position}
        </Typography>
      )}
    </li>
  );
}
