import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { CreateCharacterPage } from './pages/CreateCharacterPage'
import { CharacterListPage } from './pages/CharacterListPage'
import { Toaster } from "sonner"
import { RecoilRoot } from "recoil";
import { StrictMode } from 'react'
import { ThemeProvider } from './components/context/ThemeProvider'

function PublicLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>
}

function App() {

  return (
    <StrictMode>
      <RecoilRoot>
        <ThemeProvider>
          <Toaster position="bottom-right" />
          <Router>
            <div className="min-h-screen bg-background dark:bg-background">
              <Routes>
            <Route path="/"
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
        </ThemeProvider>
      </RecoilRoot>
  </StrictMode>
) 
}

export default App
