import Link from 'next/link'

export default function RedirectButton({
  href,
  children,
}) {
  return (
    <Link href={href}>
      <a className="button block">{children}</a>
    </Link>
  )
}