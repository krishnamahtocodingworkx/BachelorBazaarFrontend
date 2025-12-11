"use client"
import React from 'react'
import Link from 'next/link'
import { NavItems, STRINGS } from '@/utils/contant'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Input } from '@mui/material';
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <Link href={"/"} aria-label='home page'>{STRINGS.appName}</Link>

            <div className='nav-links'>
                {NavItems.map((item, i) => (
                    <Link key={item.label + i} aria-label={item.label} href={item.href} className="nav-link">{item.label}</Link>
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