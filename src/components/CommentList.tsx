import React from 'react';
import { CommentCard } from './CommentCard';
import { Comment } from '../types';

interface CommentListProps {
  comments: Comment[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-accent-charcoal flex items-center gap-2">
        <span>Comentarios</span>
        <span className="px-2 py-1 bg-accent-mint/20 rounded-full text-sm">
          {comments.length}
        </span>
      </h3>
      
      {comments.length === 0 ? (
        <div className="text-center py-8 text-accent-charcoal/60">
          <p>No hay comentarios para esta publicación.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CommentCard comment={comment} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};