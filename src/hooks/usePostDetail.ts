import { useState, useEffect } from 'react';
import { Post, Comment, User } from '../types';
import { apiService } from '../services/api';

export const usePostDetail = (postId: number) => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetail = async () => {
      setLoading(true);
      try {
        const [postData, commentsData] = await Promise.all([
          apiService.getPostById(postId),
          apiService.getCommentsByPostId(postId)
        ]);
        
        setPost(postData);
        setComments(commentsData);
        
        // Obtener datos del autor
        const authorData = await apiService.getUserById(postData.userId);
        setAuthor(authorData);
      } catch (error) {
        console.error('Error fetching post detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [postId]);

  return { post, comments, author, loading };
};