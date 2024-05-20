// クライアントコンポーネント
"use client";
import Link from 'next/link'

/**
 * 単一の投稿データを表示
 * @function Post
 * @param {Object} props - プロパティオブジェクト
 * @param {Object} props.post - 投稿データ
 * @param {Function} props.handleDelete - 投稿削除のハンドラ関数
 * @returns {JSX.Element} 投稿データを表示するReactコンポーネント
 */
const Post = ({post, handleDelete}) => {
  return (
    <tr key={post.id} className="border-t border-gray-200">
      <td className="px-4 py-2">{post.id}</td>
      <td className="px-4 py-2">{post.title}</td>
      <td className="px-4 py-2">{post.body}</td>
      <td className="px-4 py-2 flex">
				{/* 編集ボタン */}
        <Link href={`edit/${post.id}`} className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded">編集</Link>

				{/* 削除ボタン */}
				<form action={handleDelete}>
          <input type="hidden" name="id" value={post.id} />
          <button
            className="text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded ml-2"
          >
            削除
          </button>
        </form>
      </td>
    </tr>
  );
};

export default Post;