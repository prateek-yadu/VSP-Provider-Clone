import { Outlet } from 'react-router'
import { ThemeProvider } from '../components/custom/theme-provider'
import { Toaster } from '../components/ui/sonner'
import { store } from '../app/store'
import { Provider } from 'react-redux'

export default function Layout() {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Outlet />
                    <Toaster position='top-center' richColors />
                </ThemeProvider>
            </Provider>
        </>
    )
}
