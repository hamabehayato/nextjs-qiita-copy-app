/**
 * NavigationLink
 *
 * @package components
 */
import { FC } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

type Props = {
  label: string
  linkPath: string
  outline?: string
}

/**
 * NavigationLink
 * @returns {JSX.Element}
 * @constructor
 */
export const NavigationLink: FC<Props> = ({ label, linkPath, outline }) => {
  return (
    <li className={`${styles.item} ${outline ? styles.outline : ''}`}>
      <Link href={linkPath}>{label}</Link>
    </li>
  )
}
