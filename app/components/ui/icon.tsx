import Image from 'next/image';
import { cn } from '@/lib/utils';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = 20, className }: IconProps) => {
  return (
    <Image
      src={`/icons/${name}`}
      alt={`${name.split('.')[0]} icon`}
      width={size}
      height={size}
      className={cn('w-[80%]', className)}
    />
  );
};
