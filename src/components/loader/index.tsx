import React from "react";
import { Spinner } from "../spinner";
import { cn } from "@/lib/utils";

type Props = {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

export default function Loader({
  className,
  noPadding,
  loading,
  children,
}: Props) {
  return loading ? (
    <div className={cn("w-full py-5 flex justify-center", className)}>
      <Spinner noPadding={noPadding} />
    </div>
  ) : (
    children
  );
}
