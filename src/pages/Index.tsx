import { UserListContainer } from "@/components/containers/UserListContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="space-y-8">
          <div>
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 rounded-full">
              Example
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">User Management</h1>
            <p className="mt-2 text-gray-500">
              A demonstration of separating business logic from presentation
            </p>
          </div>
          <UserListContainer />
        </div>
      </div>
    </div>
  );
};

export default Index;