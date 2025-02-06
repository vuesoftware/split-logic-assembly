export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface UserListProps {
  users: User[];
  isLoading: boolean;
  error: Error | null;
}