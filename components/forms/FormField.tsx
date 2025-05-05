import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  error?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
}

function FormField({
  control,
  name,
  error,
  label,
  placeholder,
  type = 'text',
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-neutral-100 font-normal">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              className="min-h-12 px-5 rounded-md placeholder:text-neutral-500"
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          {/* TODO: fix validation (error message to show immediately after leaving dirty input */}
          {error ? (
            <FormMessage className="text-red-400 text-sm">{error}</FormMessage>
          ) : null}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormField;
