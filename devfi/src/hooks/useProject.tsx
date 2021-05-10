import { useQuery } from "react-query";
import { GetProjectById } from "../apiManager";

const fetchProject = async (projectId: string) => {
  return GetProjectById(projectId);
};

export const useProject = (projectId: string) => {
  return useQuery(
    ["project", projectId],
    () => {
      return fetchProject(projectId);
    },
    {
      initialData: [],
      // Keep data fresh.
      // Only fetch when a valid restaurant id is provided.
      enabled: !!projectId,
    }
  );
};
