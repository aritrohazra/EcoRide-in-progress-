'use client'
import {Grid} from '@mui/material'
import React from 'react'

const Layout =({Children})=>{
    return(
        <div className='h-screen'>
            <Grid container>
                <Grid item xs={12} md={8} lg={5}>
                    {Children}
                </Grid>
                <Grid item className='h-screen w-full' xs={0} md={4} lg={7}>
                    <img className='w-full h-full object-cover objet-right-top' src="https://static.vecteezy.com/system/resources/previews/040/338/619/non_2x/ai-generated-a-taxi-cab-is-driving-down-the-street-at-night-free-photo.jpg" alt="" />
                </Grid>
            </Grid>
            <Grid>
                
            </Grid>
        </div>
    )
}

export default Layout