import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { CreateCharacterPage } from './pages/CreateCharacterPage'
import { CharacterListPage } from './pages/CharacterListPage'
import { HomePage } from './pages/HomePage'

function PublicLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>
}

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/"
            element={
              <PublicLayout>
                <HomePage />
              </PublicLayout>
            }
          />
          <Route path="/character/create"
            element={
              <PublicLayout>
                <CreateCharacterPage />
              </PublicLayout>
            }
          />
          <Route path="/character/list"
            element={
              <PublicLayout>
                <CharacterListPage />
              </PublicLayout>
            
            } />
        </Routes>
      </div>
    </Router>

  )
}

export default App
