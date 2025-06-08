import { createContext, useContext, ReactNode } from 'react';
import { useProvideAuth } from '../composables/useProvideAuth'; // path may vary

const AuthContext = createContext<ReturnType<typeof useProvideAuth> | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
