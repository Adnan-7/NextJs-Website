import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  return (
    <div>
      <nav>
        <div className='logo'>
          <Image src='/logo.png' width={138} height={120} />
        </div>

        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/fighters'>
          <a>Fighter Listing</a>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
