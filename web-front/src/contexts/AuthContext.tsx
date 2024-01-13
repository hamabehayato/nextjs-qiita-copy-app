/**
 * TodoContext
 *
 * @package contexts
 */
import { FC, ReactNode, useContext, createContext } from 'react';
import { UserType } from '@/interfaces/User';
import { useAuth } from '@/hooks/useAuth';

type Props = {
  children: ReactNode;
};

interface ContextInterface {
  user: UserType | undefined;
  isAuth: boolean;
  signIn: (user: UserType) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext({} as ContextInterface);

/**
 * AuthProvider
 * @param children
 * @returns
 */
export const AuthProvider: FC<Props> = ({ children }) => {
  const { user, isAuth, signIn, signOut } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
