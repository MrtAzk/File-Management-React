
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FolderView from './pages/FolderView.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import { ViewProvider } from './context/ViewContext.jsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ViewProvider>
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FolderView />} />
          <Route path='folder/:id' element={<FolderView />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
    </ViewProvider>
  </QueryClientProvider>,
)
