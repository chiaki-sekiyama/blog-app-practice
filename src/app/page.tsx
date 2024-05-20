import Link from 'next/link';
import prisma from "@/app/lib/prisma";
// 投稿データ一覧のコンポーネント
import PostList from "./(components)/PostList";

// このページをSSRにする
export const dynamic = 'force-dynamic'

/**
 * 投稿のリストと新規投稿作成へのリンク
 * @async
 * @function Page
 * @returns {JSX.Element} 投稿一覧と新規作成リンクを含むReactコンポーネント
 */
const Page = async () => {
  // 投稿データのリスト
  const posts = await prisma.posts.findMany();

  return (
    <div className="m-8">
      <h1 className="text-2xl font-bold mb-4">投稿一覧</h1>
      <PostList posts={posts} />
      <Link href="/create" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">新規作成</Link>
    </div>
  );
};

export default Page;