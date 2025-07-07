import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <div>
        <Link href="/home" className="mr-4 text-white no-underline">
          Home
        </Link>
        <Link href="/awesome" className="text-white no-underline">
          Awesome
        </Link>
      </div>
      <Link href="/profile" className="text-white no-underline">
        MyProfile
      </Link>
    </nav>
  );
};

export default Navbar;