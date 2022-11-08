'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ProfileCard() {
    const [isOpened, setOpened] = useState(false);

    function handleClick() {
        setOpened(!isOpened);
    }

    if (isOpened) {
        return (
            <div className='profile-card profile-card-opened' onClick={handleClick}>
                <Image src="https://picsum.photos/50" alt="Avatar" width='50' height='50' className='avatar' />
                <p>John Smith</p>
                <p>John Smith</p>
                <p>John Smith</p>
                <p>John Smith</p>
                <p>John Smith</p>
            </div>
        );
    }
    return (
        <div className='profile-card' onClick={handleClick}>
            <Image src="https://picsum.photos/50" alt="Avatar" width='50' height='50' className='avatar' />
            {/* <p>John Smith</p> */}
        </div>
    );
}
