import Image from 'next/image';

import { APP_NAME } from '@/constants/appConfig';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

function Logo({ className, size = 'md' }: LogoProps) {
  const imageSize = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 },
  }[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.svg"
        alt={`${APP_NAME} logo`}
        width={imageSize.width}
        height={imageSize.height}
        className="object-contain invert"
      />
      <h2 className="flex text-xl font-bold text-neutral-100">{APP_NAME}</h2>
    </div>
  );
}

export default Logo;
