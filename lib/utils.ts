import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { toast } from 'sonner';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleError(error: unknown, action: string): void {
  if (error instanceof Error) {
    toast.error(`Error ${action}: ${error.message}`);
  } else {
    toast.error('An unknown error occurred');
  }
}
