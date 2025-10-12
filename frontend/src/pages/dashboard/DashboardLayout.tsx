import { Link, Outlet } from 'react-router'
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar"
import DashboardSidebar from '../../components/custom/dashboard/DashboardSidebar'
import { Separator } from "../../components/ui/separator"
import { Plus } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../components/ui/breadcrumb'

export default function DashboardLayout() {
  return (
    <>
      <SidebarProvider>
        <DashboardSidebar title='Prateek Labs Inc.' url='/dashboard' />
        <main className='px-8 w-full overflow-x-hidden'>
          <div className="py-3 flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2 ">
              <SidebarTrigger className="cursor-pointer" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={"/dashboard"}>
                        Dashboard
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      VPS
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="">
              <Button variant={'outline'} size={'sm'} className='cursor-pointer'>
                <Plus /> add instance
              </Button>
            </div>
          </div>
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  )
}
