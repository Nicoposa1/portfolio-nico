export const getRepositories = async () => {
  const response = await fetch("https://api.github.com/users/Nicoposa1/repos");
  const repositories = await response.json();
  return repositories;
}