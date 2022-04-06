import { Box, Button, Modal, Typography } from '@mui/material';
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillQuestionCircle } from "react-icons/ai";

const Title = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='bg-slate-900 flex justify-between'>
            <button onClick={handleOpen}>
                <div className='text-white self-center ml-2'>
                    <AiFillQuestionCircle className='text-4xl' />
                </div>
            </button>

            <Link href='/'><a className='text-3xl text-white my-5'>Waddle</a></Link>
            <div className='mr-2'></div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* position the box in the center */}
                <Box className='absolute top-[50%] left-[50%] bg-white -translate-x-[50%] -translate-y-[50%] overflow-scroll h-[30rem] my-auto'>
                    <div className='flex justify-center font-bold text-slate-900 text-2xl'>How to Play</div>
                    <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
                </Box>
            </Modal>
        </div>
    )
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    overflow: 'scroll',
    height: 400
};


export default Title