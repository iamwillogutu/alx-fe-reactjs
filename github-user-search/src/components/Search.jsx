import { useState } from 'react'
import { fetchUserData, fetchAdvancedUserData } from '../services/githubService'

function Search() {
  const [username, setUsername] = useState('')
  const [location, setLocation] = useState('')
  const [minRepos, setMinRepos] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setUsers([])
    try {
      const data = await fetchAdvancedUserData({ username, location, minRepos })
      setUsers(data)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}

      {users.length > 0 && (
        <div className="mt-4 grid gap-4">
          {users.map((user) => (
            <div key={user.login} className="border p-4 rounded flex items-center gap-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-bold">{user.name || user.login}</h3>
                <p>Location: {user.location || 'N/A'}</p>
                <p>Public Repos: {user.public_repos}</p>
                <a href={user.html_url} target="_blank" className="text-blue-600">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
