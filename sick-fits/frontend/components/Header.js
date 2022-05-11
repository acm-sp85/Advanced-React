import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="bar">
        {/* Using this kind of link would make the page to hard refresh
        so we wouldn't be taking advantage of Next.js serverside rendering */}
        {/* <a href="/">RidOf</a> */}
        <Link href="/">RidOf</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </header>
  );
}
