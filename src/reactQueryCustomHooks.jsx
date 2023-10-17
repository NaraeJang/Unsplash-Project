import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=PzjUX06Q73fjaJjeGRjA8P2ibd1ti9IeJd87-462u8s&query=cat";

export const useFetchUnsplash = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const { data } = await axios.get(url);
      // console.log("data", data);

      return data;
    },
  });

  return { data, isLoading, isError };
};

export const useSearchUnsplash = () => {
  const queryClient = useQueryClient();

  const { mutate: searchUnsplash } = useMutation({
    mutationFn: (searchTitle) => axios.get(`${url}&query=${searchTitle}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images"] });
      console.log("uploaded.");
    },
  });

  return { searchUnsplash };
};
