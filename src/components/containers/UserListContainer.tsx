import { useQuery } from "@tanstack/react-query";
import { UserList } from "../presentation/UserList";
import { User } from "@/types/user";
import { useToast } from "@/components/ui/use-toast";

const fetchUsers = async (): Promise<User[]> => {
  // Simulated API call
  const response = await fetch("https://api.example.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export const UserListContainer = () => {
  const { toast } = useToast();
  
  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    },
  });

  return (
    <UserList
      users={users}
      isLoading={isLoading}
      error={error instanceof Error ? error : null}
    />
  );
};