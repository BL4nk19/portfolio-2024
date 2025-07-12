import GithubIcon from './Icons/GithubIcon';
import LinkedinIcon from './Icons/LinkedinIcon';
import OutlookIcon from './Icons/OutlookIcon';
import InstagramIcon from './Icons/InstagramIcon';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  'github.svg': GithubIcon,
  'linkedin.svg': LinkedinIcon,
  'outlook.svg': OutlookIcon,
  'instagram.svg': InstagramIcon,
};

export const Icon = ({ name, size = 20, className = '' }: IconProps) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return <span className={className} style={{ width: size, height: size }} />;
  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
    />
  );
};