import { Role, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Api } from '../../trpc'

/**
 * @provider useUserContext
 * @description A provider to get the relevant user context
 * @attribute {'unauthenticated' | 'authenticated'} isLoggedIn - Wether the user is authenticated or not
 * @attribute {User} user - The user object, user.id to access the id for example
 * @usage  add 'const {user} = useUserContext(): { id: string, name: string, email: string, roles: { id: string, name: string }[] }' , then you can access the id, name, email like that 'const userId = user?.id'
 * @import import { useUserContext } from '@/core/context'
 */

type AuthenticationStatus = 'unauthenticated' | 'loading' | 'authenticated'

type UserWithRoles = User & { roles: Role[] }

interface UserContextType {
  user: UserWithRoles | null
  checkRole: (roleName: string) => boolean
  refetch: () => void
  authenticationStatus: AuthenticationStatus
  isLoggedIn: boolean
  isLoading: boolean
}

const UserContext = createContext<UserContextType>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data, status } = useSession()

  const [user, setUser] = useState<UserWithRoles>(null)

  const isLoggedIn = status === 'authenticated'

  const { refetch, isLoading: isLoadingUser } = Api.user.findFirst.useQuery(
    {
      where: { id: data?.user?.id },
      include: { roles: true },
    },
    {
      enabled: false,
      onSuccess: user => {
        setUser(user)
      },
    },
  )

  const checkRole = (roleName: string) => {
    return !!user?.roles?.find(role => role.name === roleName)
  }

  const isLoading =
    status === 'loading' || (status === 'authenticated' && isLoadingUser)

  useEffect(() => {
    if (status === 'authenticated') {
      refetch()
    }
  }, [status])

  return (
    <UserContext.Provider
      value={{
        user,
        checkRole,
        refetch,
        authenticationStatus: status,
        isLoggedIn,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider')
  }

  return context
}
