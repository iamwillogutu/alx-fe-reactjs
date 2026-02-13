import axios from 'axios'

// Advanced search function
export async function fetchAdvancedUserData({ username, location, minRepos }) {
  let query = ''
  if (username) query += `${username} in:login`
  if (location) query += ` location:${location}`
  if (minRepos) query += ` repos:>=${minRepos}`

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`)

  // GitHub Search API returns items array
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      const details = await axios.get(user.url) // get full user details
      return details.data
    })
  )

  return users
}
