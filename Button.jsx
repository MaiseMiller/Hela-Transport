import React, { forwardRef } from 'react';

const VARIANT_CLASSES = {
  primary: 'bg-brown-800 text-white hover:bg-brown-700',
  outline: 'bg-transparent border border-white text-white hover:bg-white/10',
  ghost: 'bg-transparent text-brown-800 hover:bg-brown-50',
};

const SIZE_CLASSES = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-xl',
};

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  type = 'button',
  ...props
}, ref) => {
  const base = 'inline-flex items-center justify-center font-medium transition-colors duration-200';
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
  const finalClass = `${base} ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} ref={ref} className={finalClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} type={type} className={finalClass} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
