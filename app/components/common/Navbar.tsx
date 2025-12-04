"use client"
import React from 'react'
import Link from 'next/link'
import { NavItems, STRINGS } from '@/utils/contant'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Input } from '@mui/material';

const Navbar = () => {
    return (
        <nav className='w-full flex-between-center flex-col md:flex-row px-8 py-4'>
            <Link href={"/"} aria-label='home page'>{STRINGS.appName}</Link>

            <div>
                {NavItems.map((item, i) => (
                    <Link key={item.label + i} aria-label={item.label} href={item.href}>{item.label}</Link>
                ))}
            </div>

            <div>
                <Input type="text" placeholder='What are you looking for?'
                    endAdornment={<SearchRoundedIcon />}
                    sx={{
                        px: 2,
                        py: 0.5,
                        bgcolor: "#f0f0f0",
                        borderRadius: 1,
                        width: 300,
                    }}
                />
            </div>
        </nav>
    )
}

export default Navbar