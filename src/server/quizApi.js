class QuizApi {
  static baseUrl = "http://localhost:3001";

  static async getQuestions() {
    try {
      const response = await fetch(`${QuizApi.baseUrl}/questions`);
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
