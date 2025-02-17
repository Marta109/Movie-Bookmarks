class FilmApi {
  static apiKey = "3f682b8f";
  static baseUrl = "https://www.omdbapi.com/";
  static async getMoviesBySearch(query, page = 1) {
    try {
      const response = await fetch(
        `${FilmApi.baseUrl}?s=${encodeURIComponent(
          query
        )}&page=${page}&apikey=${FilmApi.apiKey}`
      );
      const data = await response.json();
      return {
        data,
        success: data.Response === "True",
        error: data.Response === "True" ? null : data.Error,
        total: data.totalResults,
      };
    } catch (error) {
      return { success: false, data: [], error: error.message, total: 0 };
    }
  }
  static async getMovieById(id) {
    try {
      const response = await fetch(
        `${FilmApi.baseUrl}?i=${id}&apikey=${FilmApi.apiKey}`
      );
      const data = await response.json();
      return {
        data,
        success: data.Response === "True",
        error: data.Response === "True" ? null : data.Error,
      };
    } catch (error) {
      return { success: false, data: null, error: error.message };
    }
  }
}

export default FilmApi;
