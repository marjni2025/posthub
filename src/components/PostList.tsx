import React from 'react';
import { PostCard } from './PostCard';
import { Post, User } from '../types';

interface PostListProps {
  posts: Post[];
  users: User[];
  onPostClick: (postId: number) => void;
}

export const PostList: React.FC<PostListProps> = ({ posts, users, onPostClick }) => {
  const getUserById = (userId: number) => users.find(user => user.id === userId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <div
          key={post.id}
          style={{ animationDelay: `${index * 0.1}s` }}
          className="animate-slide-up"
        >
          <PostCard
            post={post}
            author={getUserById(post.userId)}
            onClick={() => onPostClick(post.id)}
          />
        </div>
      ))}
    </div>
  );
};