"use client";

import dynamic from "next/dynamic";

const MatrixBackground = dynamic(
  () => import("@/components/ui/MatrixBackground"),
  { ssr: false }
);

export default function ClientMatrixBackground() {
  return <MatrixBackground />;
}
