import { z } from 'zod';

// Оновлена схема для логіну, де замість email використовуємо username
export const loginSchema = z.object({
  username: z.string().min(3, 'Введіть коректне ім’я користувача'), // Перевірка username
  password: z.string().min(4, 'Мінімум 4 символи'), // Перевірка паролю
});

export type LoginSchema = z.infer<typeof loginSchema>;
