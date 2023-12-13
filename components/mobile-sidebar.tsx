"use client"

import React, { useEffect, useState } from 'react'

import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from '@/components/sidebar'

const MobileSidebar = () => {
    const [iseMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!iseMounted){
        return null;
    }
  return (
    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className='md:hidden'>
                <Menu/>
            </Button>
            <SheetContent side="left" className='p-0'>
                <Sidebar/>
            </SheetContent>
        </SheetTrigger>
    </Sheet>
  )
}

export default MobileSidebar