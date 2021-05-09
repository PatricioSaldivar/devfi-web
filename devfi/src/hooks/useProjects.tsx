import { useQuery } from "react-query";
import { GetProjects } from "../apiManager";

const fetchProjects = async () => {
  return GetProjects();
};

export const useProjects = () => {
  return useQuery(
    ["projects"],
    () => {
      return fetchProjects();
    },
    {
      initialData: [],
      // Keep data fresh.
      refetchInterval: 5000,
    }
  );
};
