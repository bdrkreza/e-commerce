export const BACKEND_URL = "http://localhost:1337";

export const errorShow = (error) => {
  return <div className=" card-panel red-text">{error.message}</div>;
};

export const loadingPage = (loading) => {
  return <div className=" card-panel green-text">page loading.....</div>;
};
