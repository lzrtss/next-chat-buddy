import {
  Control,
  Controller,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form';

import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { InputType } from '@/constants/forms';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: InputType;
}

function FormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
}: FormFieldProps<T>) {
  const {
    formState: { errors, touchedFields },
  } = useFormContext();
  const fieldError = touchedFields[name] && (errors[name]?.message as string);

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

          {fieldError ? (
            <FormMessage className="text-red-500 text-sm animate-in fade-in duration-200">
              {fieldError}
            </FormMessage>
          ) : null}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormField;
