import Link from 'next/link'

export default function Button({
  type,
  children,
  onClick = () => null
}) {
  return (
    <button type={type} className="button" onClick={onClick}>{children}</button>
  )
}