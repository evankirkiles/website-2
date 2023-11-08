/*
 * NavLink.tsx
 * Author: Evan Kirkiles
 * Created On Sun Oct 01 2023
 * 2023 Digital Portfolio
 */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  children,
  href,
  ...props
}: Parameters<typeof Link>[0]) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      href={href}
      aria-current={pathname === href ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
