export function injectSession(token) {
  localStorage.setItem("trinity_session", token);
}
