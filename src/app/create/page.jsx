import { addPost } from "@/app/lib/posts";

/**
 * 新規投稿を作成するためのフォームを表示します。
 * @async
 * @function Page
 * @returns {JSX.Element} 新規投稿作成フォームを含むReactコンポーネント
 */
const Page = async () => {

  // 投稿の内容を入力するフォーム
  return (
    <div className="m-10">
      <h1 className="text-xl font-bold">投稿作成</h1>
      <form className="flex mt-8 flex-col" action={addPost}>
        <label htmlFor="title">タイトル:</label>
        <input
          type="text"
          name="title"
          className="border mx-4 p-1 w-full text-black"
        />
        <label htmlFor="body" className="mt-4">
          本文:
        </label>
        <textarea
          name="body"
          rows="4"
          className="border mx-4 p-1 w-full text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white mx-4 mt-4"
        >
          作成
        </button>
      </form>
    </div>
  );
};

export default Page;