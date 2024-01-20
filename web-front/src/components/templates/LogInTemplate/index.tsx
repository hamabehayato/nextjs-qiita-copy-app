/**
 * LoginTemplate
 *
 * @package components
 */
import { FC } from 'react'
import { BaseLayout } from '@/components/organisms/BaseLayout'
// import Link from 'next/link';
import { useAuthContext } from '@/contexts/AuthContext'
import { InputForm } from '@/components/atoms/InputForm'
import { CommonButton } from '@/components/atoms/CommonButton'
// import { NAVIGATION_LIST } from '@/constants/navigations';
import { useLoginTemplate } from './useLoginTemplate'
// import styles from './style.module.css';

export const LoginTemplate: FC = () => {
  const { logIn } = useAuthContext()
  const [
    { email, password },
    { handleChangeEmail, handleChangePassword, handleLogin },
  ] = useLoginTemplate({
    logIn,
  })

  return (
    <BaseLayout title={'Article-Manage-App'}>
      <form onSubmit={handleLogin}>
        <InputForm
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleChangeEmail}
        />
        <InputForm
          type="password"
          value={password}
          placeholder="Password"
          onChange={handleChangePassword}
        />

        <CommonButton type="submit" title="Sign In" />
      </form>
    </BaseLayout>
  )
}
