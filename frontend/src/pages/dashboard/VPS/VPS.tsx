import { CircleCheck, Ellipsis, XCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Spinner } from "../../../components/ui/spinner";

const tableHeadItems = ["Name", "Operating System", "vCPU", "Memory (GB)", "Storage (GB)", "Description", "IPv4", "Status", "Options"]

const VPSList = [
    {
        id: "userid_vm_name_in_lowercase",
        name: "Kitty-2.0",
        image: "Ubuntu 24.04 LTS",
        vCPU: 6,
        memory: "12 GiB",
        storage: "100 GiB",
        Description: "A simple description for testing purposes	",
        IPv4: "10.0.29.14",
        status: "Running"
    },
    {
        id: "userid_vm_name_in_lowercase",
        name: "Panda",
        image: "Ubuntu 24.04 LTS",
        vCPU: 6,
        memory: "12 GiB",
        storage: "100 GiB",
        Description: "A simple description for testing purposes	",
        IPv4: "10.0.29.146",
        status: "Stopped"
    },
    {
        id: "userid_vm_name_in_lowercase",
        name: "Fox",
        image: "Arch Linux",
        vCPU: 4,
        memory: "8 GiB",
        storage: "70 GiB",
        Description: "A simple description for testing purposes	",
        IPv4: "10.0.29.16",
        status: "Initializing"
    },
]

export default function VPS() {
    return (
        <>
            <h3 className=" text-2xl font-semibold tracking-tight pt-3 mt-4">VPS - Overview</h3>
            <Table className="mt-8">
                <TableHeader>
                    <TableRow>

                        {tableHeadItems.map((item) => (
                            <TableHead>
                                {item}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {VPSList.map((vps, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                {vps.name}
                            </TableCell>
                            <TableCell>
                                {vps.image}
                            </TableCell>
                            <TableCell>
                                {vps.vCPU}
                            </TableCell>
                            <TableCell>
                                {vps.memory}
                            </TableCell>
                            <TableCell>
                                {vps.storage}
                            </TableCell>
                            <TableCell>
                                {vps.Description}
                            </TableCell>
                            <TableCell>
                                {vps.IPv4}
                            </TableCell>
                            <TableCell>
                                {vps.status == "Running" &&
                                    <Badge variant={"outline"} className="text-green-500 gap-2 text-sm ">
                                        <div>
                                            <CircleCheck size={18} />
                                        </div>
                                        {vps.status}
                                    </Badge>

                                    || vps.status == "Stopped" && <Badge variant={"outline"} className="text-red-400 gap-2 text-sm ">
                                        <div>
                                            <XCircle size={18} />
                                        </div>
                                        Stopped
                                    </Badge> || vps.status == "Initializing" && <Badge variant={"outline"} className="text-sidebar-foreground/70 gap-2 text-sm ">
                                        <div>
                                            <Spinner />
                                        </div>
                                        Initializing
                                    </Badge>
                                }
                            </TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={"outline"} className="cursor-pointer">
                                            <Ellipsis />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56" align="start" side="right">
                                        <DropdownMenuLabel>VPS Actions</DropdownMenuLabel>
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem className="flex m-0">
                                                <Button className="text-sm p-0 m-0 bg-transparent text-white h-full font-normal hover:bg-transparent">
                                                    Start
                                                </Button>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>

                                                <Button className="text-sm p-0 m-0 bg-transparent text-white h-full font-normal hover:bg-transparent">
                                                    Restart
                                                </Button>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Button className="text-sm p-0 m-0 bg-transparent text-white h-full font-normal hover:bg-transparent">
                                                    Stop
                                                </Button>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuLabel>Backups</DropdownMenuLabel>
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>

                                                <Button className="text-sm p-0 m-0 bg-transparent text-white h-full font-normal hover:bg-transparent">
                                                    List Backups
                                                </Button>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Button className="text-sm p-0 m-0 bg-transparent text-white h-full font-normal hover:bg-transparent">
                                                    Take Backup
                                                </Button>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuLabel>Networking</DropdownMenuLabel>
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <Button className="text-sm p-0 m-0 bg-transparent text-white h-full font-normal hover:bg-transparent">
                                                    Manage Firewall
                                                </Button>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>

    )
}
