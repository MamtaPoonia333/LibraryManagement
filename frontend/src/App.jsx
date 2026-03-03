import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import BooksPage from './pages/BooksPage'
import UsersPage from './pages/UsersPage'
import IssueReturnPage from './pages/IssueReturnPage'

function App() {
  const [activePage, setActivePage] = useState('dashboard')

  const renderPage = () => {
    if (activePage === 'books') return <BooksPage />
    if (activePage === 'users') return <UsersPage />
    if (activePage === 'issue-return') return <IssueReturnPage />
    return <DashboardPage />
  }

  return (
    <>
      <Toaster position="top-right" />
      <Layout activePage={activePage} onPageChange={setActivePage}>
        {renderPage()}
      </Layout>
    </>
  )
}

export default App
