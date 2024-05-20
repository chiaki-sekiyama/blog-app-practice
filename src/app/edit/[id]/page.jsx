import prisma from "@/app/lib/prisma";
import { updatePost } from "@/app/lib/posts";

/**
 * 指定されたIDの投稿を編集するためのフォームを表示します。
 * @async
 * @function Page
 * @param {Object} params - パラメータオブジェクト
 * @param {string} params.id - 編集する投稿のID
 * @returns {JSX.Element} 投稿編集フォームを含むReactコンポーネント
 */
const Page = async ({params}) => {
  const id = params.id;
  // 投稿データを取得
  const post = await prisma.posts.findUnique({
    where: {
      id: parseInt(id),
    },
  });

	// 投稿の内容を編集するフォーム
  return (
    <div className="m-8">
      <h1 className="text-2xl font-bold mb-4">投稿編集</h1>
      <p>ID: {id}</p>
      <form action={updatePost}>
          <input type="hidden" name="id" value={post.id} />
          <input name="title" type="text" defaultValue={post.title} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          <textarea name="body" defaultValue={post.body} className="w-full px-3 py-2 mt-4 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" >更新</button>
      </form>
    </div>
  );
};

export default Page;