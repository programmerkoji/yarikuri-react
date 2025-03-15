import { useAuth } from "@/hooks/useAuth";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router";

type Props = {
  children: ReactNode
}

export const ProtectedRouter: FC<Props> = ({children}) => {
  const { user } = useAuth();
  return user ? <>{ children }</> : <Navigate to="/login" replace />;
};
