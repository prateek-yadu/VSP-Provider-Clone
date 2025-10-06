import { Outlet } from 'react-router'
import { ThemeProvider } from '../components/custom/theme-provider'

export default function Layout() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Outlet />
            </ThemeProvider>
        </>
    )
}
