import React from 'react';
import { MessageCircle, User as UserIcon, Calendar } from 'lucide-react';
import { Post, User } from '../types';

interface PostCardProps {
  post: Post;
  author?: User;
  onClick: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, author, onClick }) => {
  return (
    <article 
      onClick={onClick}
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm 
               border border-accent-sage/20 hover:shadow-lg hover:scale-[1.02]
               transition-all duration-300 cursor-pointer group animate-fade-in"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-accent-pink to-accent-peach 
                       rounded-full flex items-center justify-center">
          <UserIcon className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="font-semibold text-accent-charcoal">
            {author ? author.name : `Usuario ${post.userId}`}
          </p>
          <div className="flex items-center gap-1 text-sm text-accent-charcoal/60">
            <Calendar className="h-3 w-3" />
            <span>Publicación #{post.id}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <h2 className="text-xl font-bold text-accent-charcoal mb-3 
                   group-hover:text-accent-mint transition-colors duration-200
                   line-clamp-2 leading-tight">
        {post.title}
      </h2>
      
      <p className="text-accent-charcoal/80 line-clamp-3 leading-relaxed mb-4">
        {post.body}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-accent-sage/20">
        <div className="flex items-center gap-2 text-accent-charcoal/60">
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm">Ver comentarios</span>
        </div>
        <div className="px-3 py-1 bg-accent-mint/20 rounded-full">
          <span className="text-xs font-medium text-accent-charcoal">
            ID: {post.id}
          </span>
        </div>
      </div>
    </article>
  );
};