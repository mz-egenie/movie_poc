import useApi from "./useApi";

export default function useMoviesApi() {
  const { api } = useApi();
  const getMovies = (page = 1, size = 8) => {
    return api.get(`/movies/list?page=${page}&size=${size}`, {});
  };
  return { getMovies };
}
