export interface AuthState {
  token: string | null;
  user: any | null;
}

export interface AuthPayload {
  token: string;
  user: any;
}
