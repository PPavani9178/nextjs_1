import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
