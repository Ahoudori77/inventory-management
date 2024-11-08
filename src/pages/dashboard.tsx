import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // トークンがない場合はログインページへリダイレクト
    }
  }, []);

  return <div>ダッシュボード</div>;
}