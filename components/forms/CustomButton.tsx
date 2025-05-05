import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  disabled?: boolean;
}
function CustomButton({
  children,
  disabled,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      disabled={disabled}
      className={cn(
        buttonVariants({ variant: 'default', size: 'default' }),
        'w-full min-h-10 px-5 font-bold cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-auto',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
