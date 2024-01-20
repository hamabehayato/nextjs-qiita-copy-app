import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/AuthContext'
import { TodoProvider } from '@/contexts/TodoContext'
import '../styles/globals.scss'
import '../styles/variable.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </AuthProvider>
  )
}

export default MyApp
