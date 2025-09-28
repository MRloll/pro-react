import type { ReactNode } from "react";
import { Navigate } from "react-router";

interface IProps {
  isAllowed: boolean;
  path: string;
  children: ReactNode;
  data?: unknown;
}

const ProtectedRotue = ({ isAllowed, path, children, data }: IProps) => {
  if (!isAllowed) return <Navigate to={path} replace state={data} />;
  return children;
};

export default ProtectedRotue;
