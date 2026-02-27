const useAuth = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return { isAuthenticated };
};

export default useAuth;