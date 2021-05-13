import { useQuery } from "react-query";
import { GetUserInfo } from "../apiManager";

const fetchProfile = async (userId: string) => {
  return GetUserInfo(userId);
};

export const useProfile = (profileId: string) => {
  return useQuery(
    ["profile", profileId],
    () => {
      return fetchProfile(profileId);
    },
    {
      initialData: [],
      // Keep data fresh.
      refetchInterval: 5000,
      enabled: !!profileId,
    }
  );
};
