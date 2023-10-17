import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";

const accessKey = "client_id=PzjUX06Q73fjaJjeGRjA8P2ibd1ti9IeJd87-462u8s";

export const useFetchUnsplash = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["unsplash"],
    queryFn: async () => {
      const { data } = await customFetch.get(`/?${accessKey}`);
      // console.log("data", data);

      return data;
    },
  });
  return { data, isLoading, isError };
};

export const useSearchUnsplash = () => {
  const queryClient = useQueryClient();

  const { mutate: searchUnsplash } = useMutation({
    mutationFn: (searchTitle) =>
      customFetch.get(`/search/photos?${accessKey}&query=${searchTitle}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["unsplash"] });
      console.log("uploaded.");
    },
  });

  return { searchUnsplash };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.get("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task added");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isLoading };
};
