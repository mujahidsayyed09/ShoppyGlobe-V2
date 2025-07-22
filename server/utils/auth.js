export function isUserLoggedIn() {
  const user = localStorage.getItem("userInfo");
  return !!user;
}
