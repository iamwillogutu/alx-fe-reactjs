import axios from 'axios'

// Task 2 function: fetch single user by username
export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`)
  return response.data
}

// Task 3 function: advanced search with username, location, minimum repos
export async function fetchAdvancedUserData({ username, location, minRepos }) {
  let query = ''
  if (username) query += `${username} in:login`
  if (location) query += ` location:${location}`
  if (minRepos) query += ` repos:>=${minRepos}`

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  )

  // Fetch full user details for each result
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      const details = await axios.get(user.url)
      return details.data
    })
  )

  return users
}
