import { Fragment } from 'react';
import { Typography } from '@/lib/ui/Typography';

type Props = {
  title: string;
  skills: string[];
};

export function Skill({ title, skills }: Props) {
  return (
    <li className="flex flex-col">
      <Typography tag="h2" className="text-neutral-400">
        {title.toUpperCase()}
      </Typography>
      <div className="flex flex-wrap gap-x-[1.5vw] gap-y-[1vw]">
        {skills.map((skill) => (
          <Fragment key={skill}>
            <Typography font="anton" size="xl" className="leading-none">
              {skill.toUpperCase()}
            </Typography>
          </Fragment>
        ))}
      </div>
    </li>
  );
}
