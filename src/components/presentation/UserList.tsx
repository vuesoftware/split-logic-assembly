import { UserListProps } from "@/types/user";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const UserList = ({ users, isLoading, error }: UserListProps) => {
  if (error) {
    return (
      <div className="p-4 text-red-500 bg-red-50 rounded-lg animate-fadeIn">
        Error: {error.message}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="p-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {users.map((user, index) => (
        <Card
          key={user.id}
          className="p-4 hover:shadow-lg transition-shadow duration-300 animate-slideIn"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-lg">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 rounded-full">
              {user.role}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};