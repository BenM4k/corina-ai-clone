import React from "react";
import { Spinner } from "../spinner";

type Props = {
  loading: boolean;
  children: React.ReactNode;
};

export default function Loader({ loading, children }: Props) {
  return loading ? (
    <div className="w-full py-5 flex justify-center">
      <Spinner />
    </div>
  ) : (
    children
  );
}
