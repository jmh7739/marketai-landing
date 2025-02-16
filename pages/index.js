import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">🚀 MarketAI</h1>
      <p className="text-lg text-gray-500">AI 기반 중고거래 및 경매 플랫폼</p>
      <nav className="mt-4">
        <Link href="/products"><a className="mr-4">🛒 상품 목록</a></Link>
        <Link href="/auction"><a className="mr-4">🔨 경매</a></Link>
        <Link href="/auth"><a>🔑 로그인</a></Link>
      </nav>
    </div>
  );
}
