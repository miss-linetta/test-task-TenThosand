import { LoginSchema } from '../validation';

export interface LoginFormProps {
  onSubmit: (data: LoginSchema) => void;
}
