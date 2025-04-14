import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
    ChevronDownIcon,
} from '@heroicons/react/16/solid'
import LogOutButton from '../Auth/Logout'
import Link from 'next/link'

interface DropDownProps {
    userName?: string;
}

export default function DropDown({ userName }: DropDownProps) {

    return (
        <div className="relative z-[50] w-52 text-right">
            <Menu>
                <MenuButton className="inline-flex items-center gap-3 rounded-[30px]  py-2 px-4 text-sm/6 font-semibold text-white border-accent bg-accent focus:outline-none   data-[focus]:outline-white">
                    Hey, {userName ?? 'User'}
                    <ChevronDownIcon className="size-4 fill-white" />
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 origin-top-right relative mt-2 z-[50] rounded-xl bg-accent border border-white/5  p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    <MenuItem>
                        <Link href="/my-account" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            {/* <PencilIcon className="size-4 fill-white/30" /> */}
                            My Account
                            {/* <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd> */}
                        </Link>
                    </MenuItem>

                    <div className="my-1 h-px bg-white/5" />

                    <MenuItem>
                        <LogOutButton />
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    )
}