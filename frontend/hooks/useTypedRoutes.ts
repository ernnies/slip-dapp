import { useRouter } from 'next/navigation';

export function useTypedRoutes() {
  const router = useRouter();
  const goToPool = (id: string) => router.push(`/pools/${id}`);  // Typed param
  return { goToPool };
}