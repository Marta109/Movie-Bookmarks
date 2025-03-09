class QuizApi {
  static baseUrl = "https://simple-blog-api-red.vercel.app/quiz";
  static limit = 30;

  static async getQuestions() {
    try {
      const response = await fetch(`${QuizApi.baseUrl}?limit=${QuizApi.limit}`);
      const data = await response.json();
      return {
        data,
        success: response.status === 200,
        error: response.status !== 200 ? response.error : null,
      };
    } catch (error) {
      return { success: false, data: null, error: error.message };
    }
  }
}

export default QuizApi;
