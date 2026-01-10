import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title>This is about page</Title>

            <nav className='text-xl space-x-5'>
                <Link href={"/about/contact"}>Contact</Link>
                <Link href={"/about/teams"}>Teams</Link>
            </nav>
        </div>
    );
};

export default About;