import React from 'react'
import { Button, Typography } from "@mui/material";
import { AccessAlarm  } from '@mui/icons-material';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import styled from '@emotion/styled';


export default function UI() {
    const RedButton = styled(Button)({
        backgroundColor:'red',
                    color:'white',
                    margin:5,
                    ":hover":{
                        backgroundColor:"blue"
        }
    })

    return (
        <div>
            <Button variant='text'>Text</Button>
            <AccessAlarm color='primary'/>
            <Button 
                variant='contained'
                color='secondary'
                startIcon={<AccessTimeFilledRoundedIcon/>}
            >Contained</Button>
            <Button variant='outlined'>outlined</Button>
            <Typography variant='h1'component='p'>
                Hello
            </Typography>
            <Button variant='contained'
                sx={{
                    backgroundColor:'red',
                    color:'white',
                    margin:5,
                    ":hover":{
                        backgroundColor:"blue"
                    }
                }}>
                    Unique Button
                </Button>
                <RedButton>
                    another button
                </RedButton>
        </div>
    )
}
