import { Link } from "react-router"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../../ui/sidebar"
import { Bell, CircleUserRound, CreditCard, EllipsisVertical, GalleryVerticalEnd, Home, Languages, LogOut, Server, Store } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"

const menuItems = [
    {
        title: "Home",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "VPS",
        url: "/dashboard/vps",
        icon: Server,
    },
    {
        title: "Billing",
        url: "#",
        icon: CreditCard,
    },
    {
        title: "Marketplace",
        url: "#",
        icon: Store,
    },
]

const user = {
    name: "Prateek Yadu",
    email: "prateek@prateekyadu.com",
    profileImage: "https://images.pexels.com/photos/315987/pexels-photo-315987.jpeg"
}

const profileButtonBody = [
    {
        title: "Account",
        url: "#",
        icon: CircleUserRound
    },
    {
        title: "Notifications",
        url: "#",
        icon: Bell
    },
    {
        title: "Language",
        url: "#",
        icon: Languages
    },
]

const profileButtonFooter = [
    {
        title: "Log out",
        url: "#",
        icon: LogOut
    }
]




export default function DashboardSidebar({ title, url }: { title: string, url: string }) {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <Link to={url}>
                                <GalleryVerticalEnd />
                                <span className="text-base font-semibold">{title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-full">
                                        <AvatarImage src={user.profileImage} alt={user.name} />
                                        <AvatarFallback className="rounded-lg">PY</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">{user.name}</span>
                                        <span className="text-muted-foreground truncate text-xs">
                                            {user.email}
                                        </span>
                                    </div>
                                    <EllipsisVertical className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-full">
                                            <AvatarImage src={user.profileImage} alt={user.name} />
                                            <AvatarFallback className="rounded-lg">PY</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-medium">{user.name}</span>
                                            <span className="text-muted-foreground truncate text-xs">
                                                {user.email}
                                            </span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    {profileButtonBody.map((item) => (
                                        <DropdownMenuItem className="p-0">
                                            <Link to={item.url} className="w-full h-full gap-2 rounded-sm px-2 py-1.5 flex">
                                                <item.icon className="size-5" />
                                                {item.title}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                {profileButtonFooter.map((item) => (
                                    <DropdownMenuItem className="p-0">
                                        <Link to={item.url} className="w-full h-full gap-2 rounded-sm px-2 py-1.5 flex">
                                            <item.icon />
                                            {item.title}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>

    )
}
