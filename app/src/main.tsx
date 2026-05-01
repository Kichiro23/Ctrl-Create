import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import { TRPCProvider } from "@/providers/trpc"
import { ThemeProvider } from "@/hooks/useTheme"
import { CurrencyProvider } from "@/hooks/useCurrency"
import { LanguageProvider } from "@/hooks/useLanguage"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TRPCProvider>
        <ThemeProvider>
          <CurrencyProvider>
            <LanguageProvider>
              <App />
            </LanguageProvider>
          </CurrencyProvider>
        </ThemeProvider>
      </TRPCProvider>
    </BrowserRouter>
  </StrictMode>,
)
