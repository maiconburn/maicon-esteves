"use client";
import { usePathname } from "next/navigation";

import styles from "./Main.module.scss";

import React, { ReactNode } from "react";

export function Main({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" ? (
        <main className={styles.main}>{children}</main>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default Main;
