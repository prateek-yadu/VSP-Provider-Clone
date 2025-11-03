import { Outlet } from 'react-router'
import { ThemeProvider } from '../components/custom/theme-provider'
import { Toaster } from '../components/ui/sonner'

export default function Layout() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Outlet />
                <Toaster position='top-center' richColors/>
            </ThemeProvider>
        </>
    )
}
