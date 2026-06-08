// src/pages/FriendsPage.jsx

import { useQuery } from "@tanstack/react-query";
import { UsersIcon } from "lucide-react";

import { getUserFriends } from "../lib/api";
import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendsPage = () => {
  const {
    data: friends = [],
    isLoading,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <UsersIcon className="size-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">My Friends</h1>
            <p className="text-base-content opacity-70">
              View and chat with your language partners
            </p>
          </div>
        </div>

        {/* Loading */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : friends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm opacity-70">
                {friends.length} friend{friends.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {friends.map((friend) => (
                <FriendCard
                  key={friend._id}
                  friend={friend}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;