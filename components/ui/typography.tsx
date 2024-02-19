import React, { ElementType } from 'react';
import clsx from 'clsx';

export type TypographyVariant =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'h6'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1'
  | '7xl';
type TypographyAlign = 'left' | 'center' | 'right';
type TypographyWeight =
  | 'extraThin'
  | 'thin'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold';

const variantComponentMapping = {
  xs: 'p',
  sm: 'p',
  md: 'p',
  lg: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  '7xl': 'h1',
};

const classesSchema = {
  base: 'm-0 p-0 whitespace-pre-line',
  variant: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    h5: 'text-h5',
    h6: 'text-h6',
    '7xl': 'text-7xl',
  },
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },
  weight: {
    extraThin: 'font-[200]',
    thin: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
};

export interface TypographyProps {
  variant: TypographyVariant;
  component?: ElementType;
  align?: TypographyAlign;
  weight?: TypographyWeight;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: any;
  className?: string;
  ref?: any;
}

const Typography = ({
  component,
  variant,
  align,
  weight,
  children,
  dangerouslySetInnerHTML,
  className,
  ref,
}: TypographyProps) => {
  const Component = component || variantComponentMapping[variant] || 'span';

  const typographyClasses = clsx([
    classesSchema.base,
    classesSchema.variant[variant],
    align && classesSchema.align[align],
    weight && classesSchema.weight[weight],
    className,
  ]);

  const renderTypography = dangerouslySetInnerHTML ? (
    <Component
      ref={ref}
      className={typographyClasses}
      dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }}
    />
  ) : (
    <Component ref={ref} className={typographyClasses}>
      {children}
    </Component>
  );
  return <>{renderTypography}</>;
};

export default Typography;
