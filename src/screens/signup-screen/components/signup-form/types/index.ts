import { SignUpSchema } from '../validation';

export interface SignUpFormProps {
  onSubmit: (data: SignUpSchema) => void;
}
