import { useQuery } from "react-query";
import { GetProjectsByUserId } from "../apiManager";

const fetchUserProjects = async (userId: string) => {
  return GetProjectsByUserId(userId);
};

export const useUserProjects = (userId: string) => {
  return useQuery(
    ["projects", userId],
    () => {
      return fetchUserProjects(userId);
    },
    {
      initialData: [],
      // Keep data fresh.
      refetchInterval: 5000,
      // Only fetch when a valid restaurant id is provided.
      enabled: !!userId,
    }
  );
};
