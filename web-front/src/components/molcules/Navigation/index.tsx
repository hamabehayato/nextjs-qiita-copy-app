/**
 * Navigation
 *
 * @package components
 */
import { useAuthContext } from '@/contexts/AuthContext'
import { useSignNavigation } from './useNavigation'
import { NavigationLink } from '@/components/atoms/NavigationLink'
import { NAVIGATION_LIST } from '@/constants/navigations'
import styles from './styles.module.scss'

/**
 * Navigation
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigation = () => {
  const { signOut } = useAuthContext()
  const [{ handleSignOut }] = useSignNavigation({ signOut })

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Article-Manage-App</h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <NavigationLink
            label={'ユーザー登録'}
            linkPath={NAVIGATION_LIST.SIGNUP}
            outline={'outline'}
          />
          <NavigationLink label={'ログイン'} linkPath={NAVIGATION_LIST.TOP} />
          {/* <li className={styles.item}>
            <button onClick={handleSignOut}>Sign Out</button>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
