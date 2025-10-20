import { useParams } from "next/navigation";  // Typed routes

export default function EditPool() {
  const params = useParams<{ poolId: string }>();
  return <div>Edit Pool {params.poolId}</div>;
}