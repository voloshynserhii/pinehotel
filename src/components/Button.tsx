import { cn } from '@/lib/utils';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-sage-700 text-cream-50 hover:bg-sage-800 focus:ring-sage-500',
    secondary: 'bg-cream-100 text-stone-900 hover:bg-cream-200 focus:ring-cream-500',
    outline: 'border-2 border-sage-700 text-sage-700 hover:bg-sage-50 focus:ring-sage-500',
  };

  return (
    <button
      className={cn(
        'font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
