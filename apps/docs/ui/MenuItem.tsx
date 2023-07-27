import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export const MenuItem = (props: {
  title: string;
  path: string;
  icon?: ReactNode;
  wip?: boolean;
  newItem?: boolean;
  updated?: boolean;
}) => {
  const {
    title,
    path,
    icon,
    wip = false,
    newItem = false,
    updated = false,
  } = props;
  const pathname = usePathname();
  const active = pathname === path;
  const hasIcon = !!icon;
  const styles = cva(
    [
      'group',
      'w-full',
      'py-1.5',
      'flex',
      'space-x-2',
      'items-center',
      'text-sm',
    ],
    {
      variants: {
        active: {
          true: ['text-blue-900', 'font-medium'],
          false: ['text-gray-800'],
        },
        hasIcon: {
          true: ['pr-4'],
          false: ['border-l-2', 'px-4'],
        },
        wip: {
          true: ['cursor-not-allowed', 'opacity-50'],
          false: [],
        },
      },
      compoundVariants: [
        {
          active: true,
          hasIcon: false,
          className: ['border-l-blue-900', 'bg-blue-50'],
        },
        {
          active: false,
          hasIcon: false,
          className: ['hover:border-l-blue-700', 'hover:bg-blue-50/25'],
        },
      ],
    }
  );

  const iconStyles = cva(['border', 'rounded', 'p-1'], {
    variants: {
      active: {
        true: [
          'border-blue-900',
          'text-blue-900',
          'bg-blue-50',
          'shadow-sm',
          'shadow-blue-900/50',
        ],
        false: [
          'border-gray-300',
          'text-gray-400',
          'group-hover:text-blue-900',
          'group-hover:border-blue-900',
          'group-hover:bg-blue-50',
        ],
      },
    },
  });

  const Component = wip ? 'div' : Link;

  return (
    <Component className={styles({ active, hasIcon, wip })} href={path}>
      {icon && <span className={iconStyles({ active })}>{icon}</span>}
      <span>{title}</span>
      {wip && (
        <span className='rounded border border-dashed border-yellow-100 bg-yellow-50 px-[0.3rem] py-[0.15rem] text-xs text-yellow-500'>
          WIP
        </span>
      )}
      {newItem && (
        <span className='rounded border border-dashed border-blue-100 bg-blue-50/75 px-[0.3rem] py-[0.15rem] text-xs text-blue-600'>
          NEW
        </span>
      )}
      {updated && (
        <span className='rounded border border-dashed border-green-100 bg-green-50/75 px-[0.3rem] py-[0.15rem] text-xs text-green-600'>
          UPDATED
        </span>
      )}
    </Component>
  );
};
