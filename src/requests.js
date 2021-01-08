const API_key = "b71ab30fc920cc6063bffe6362179226";
const requests = {
  fetchOriginal: `/discover/tv?api_key=${API_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
  fetchTrending: `/movie/popular?api_key=${API_key}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_key}&language=en-US&page=1`,
  fetchTop: `/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
};
export default requests;
