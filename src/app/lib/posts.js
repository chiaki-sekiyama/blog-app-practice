"use server";

import prisma from "@/app/lib/prisma";

/**
 * 新規投稿をデータベースに作成します。
 * @async
 * @function addPost
 * @param {Object} data - 新規投稿のデータ
 */

export const addPost = async (data) => {
  // 入力値を取得
  const title = data.get("title");
  const body = data.get("body");

  // データベースに1レコード作成
  await prisma.posts.create({
    data: {
      title,
      body,
    },
  });
};

/**
 * 指定されたIDの投稿を削除します。
 *
 * @param {FormData} data - フォームデータ。'id'フィールドには削除する投稿のIDが含まれている必要があります。
 * @returns {Promise<void>} 削除操作が完了すると解決するPromise。
 */

export const deletePost = async (data) => {
  // 入力値を取得
  const id = data.get("id");

  // データベースから1レコード削除
  await prisma.posts.delete({
    where: {
      id: parseInt(id),
    },
  });
};

/**
 * 指定されたIDの投稿を更新します。
 *
 * @param {FormData} data - フォームデータ。'id'フィールドには更新する投稿のIDが含まれている必要があります。
 * @returns {Promise<void>} 更新操作が完了すると解決するPromise。
 */

export const updatePost = async (data) => {
  // 入力値を取得
  const id = data.get("id");
  const title = data.get("title");
  const body = data.get("body");

  // データベースのレコードを更新
  await prisma.posts.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title: title,
      body: body,
    },
  });
};