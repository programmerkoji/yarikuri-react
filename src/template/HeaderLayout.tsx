import { Header } from "@/components/organisms/layout/Header";
import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
}

export const HeaderLayout: FC<Props> = memo(({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
});
