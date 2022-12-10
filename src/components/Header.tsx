import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div>
        <div>
          <Image src='https://links.papareact.com/f90' width={150} height={40} alt="store logo" />
        </div>
      </div>
      {/* Bottom Nav */}
      <div></div>
    </header>
  );
};

export default Header;
