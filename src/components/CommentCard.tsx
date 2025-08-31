import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { Comment } from '../types';

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-accent-sage/20
                   hover:bg-white/90 transition-all duration-200 animate-slide-up">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-accent-peach to-accent-pink 
                       rounded-full flex items-center justify-center flex-shrink-0">
          <MessageSquare className="h-4 w-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-accent-charcoal truncate">
            {comment.name}
          </h4>
          <div className="flex items-center gap-1 text-sm text-accent-charcoal/60">
            <Mail className="h-3 w-3" />
            <span className="truncate">{comment.email}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-accent-charcoal/80 leading-relaxed">
        {comment.body}
      </p>
    </div>
  );
};