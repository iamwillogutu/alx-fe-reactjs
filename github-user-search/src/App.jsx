import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Search from './components/Search'


function Home() {
  return <h2>Home</h2>
}

function Search() {
  return <h2>Search GitHub Users</h2>
}

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>GitHub User Search</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/search">Search</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
