// クライアントコンポーネント
"use client";
import { useState } from "react";
// 投稿コンポーネント
import Post from "./Post";
// 投稿削除関数
import { deletePost } from "@/app/lib/posts";

/**
 * 投稿のリストを表示
 * @function PostList
 * @param {Object} props - プロパティオブジェクト
 * @param {Array} props.posts - 投稿データの配列
 * @returns {JSX.Element} 投稿リストを含むReactコンポーネント
 */
const PostList = (props) => {
  // 投稿データのリスト
  const [posts, setPosts] = useState(props.posts);

  /**
   * 投稿データを削除
   * @function handleDelete
   * @param {Object} data - 削除する投稿データ
   */
  const handleDelete = (data) => {
    deletePost(data); // データベースから削除
    const id = parseInt( data.get('id') );  // 数値に変換
    setPosts(posts.filter((post) => post.id !== id)); // 画面から削除
  };

  return (
    <table className="mt-8 w-full table-auto">
      <tbody>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PostList;