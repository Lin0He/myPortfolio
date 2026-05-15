import type { ReactNode } from "react";

type ExhibitShellProps = {
  children: ReactNode;
};

export function ExhibitShell({ children }: ExhibitShellProps) {
  return (
    <div className="grid h-full w-full items-center px-6 pt-24 md:px-16 md:pt-20">
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}
