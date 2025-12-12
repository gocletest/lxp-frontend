import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,  // 환경별로 자동 적용
  timeout: 10000, // 10초 타임아웃 (선택)
});

// 요청 인터셉터 (JWT 자동 추가)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // JSON 기본 설정
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 (401 자동 처리)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      // JWT 만료 또는 없음 → 자동 로그아웃
      if (status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // 백엔드 인증 만료 응답 후 로그인페이지로 이동
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
