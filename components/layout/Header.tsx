import Link from 'next/link';

import Logo from '@/components/layout/Logo';
import { ROUTES } from '@/constants/routes';
import { ARIA_LABELS } from '@/constants/accessibility';

function Header() {
  return (
    <header>
      <nav>
        <Link
          href={ROUTES.HOME}
          aria-label={ARIA_LABELS.HOME_LINK}
          className="inline-flex items-center gap-2"
        >
          <Logo />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
