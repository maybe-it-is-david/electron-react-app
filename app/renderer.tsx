import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import appIcon from '@/resources/build/icon.png'
import { WindowContextProvider, menuItems } from '@/lib/window'
import { ThemeProvider } from '@/app/components/theme-provider'
import { Toaster } from '@/app/components/ui/sonner'
import '@/lib/window/window.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <WindowContextProvider titlebar={{ title: 'Electron React App', icon: appIcon, menuItems }}>
      <ThemeProvider storageKey="ui-theme">
        <Toaster />
        <App />
      </ThemeProvider>
    </WindowContextProvider>
  </React.StrictMode>
)
