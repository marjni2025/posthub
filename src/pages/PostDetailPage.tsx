import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User as UserIcon, Calendar, MessageCircle } from 'lucide-react';
import { CommentList } from '../components/CommentList';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { usePostDetail } from '../hooks/usePostDetail';

export const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = Number(id);
  
  const { post, comments, author, loading } = usePostDetail(postId);

  if (loading) {
    return <LoadingSpinner size="lg" message="Cargando publicación..." />;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-peach/30 via-white to-accent-sage/20 
                     flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-accent-charcoal/60 mb-4">
            Publicación no encontrada
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-accent-mint text-white rounded-xl 
                     hover:bg-accent-mint/80 transition-colors font-medium"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-peach/30 via-white to-accent-sage/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-xl
                   bg-white/80 backdrop-blur-sm border border-accent-sage/30
                   text-accent-charcoal font-medium hover:bg-accent-mint/20 
                   hover:border-accent-mint/50 transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a publicaciones
        </button>

        {/* Post Detail */}
        <article className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg 
                           border border-accent-sage/20 mb-8 animate-fade-in">
          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-accent-sage/20">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-pink to-accent-peach 
                           rounded-full flex items-center justify-center">
              <UserIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-accent-charcoal">
                {author ? author.name : `Usuario ${post.userId}`}
              </h2>
              <div className="flex items-center gap-1 text-sm text-accent-charcoal/60">
                <Calendar className="h-3 w-3" />
                <span>Publicación #{post.id}</span>
                {author && (
                  <>
                    <span className="mx-2">•</span>
                    <span>@{author.username}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-accent-charcoal mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-accent-charcoal/80 leading-relaxed text-lg">
                {post.body}
              </p>
            </div>
          </div>

          {/* Post Stats */}
          <div className="flex items-center gap-4 pt-6 border-t border-accent-sage/20">
            <div className="flex items-center gap-2 text-accent-charcoal/60">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">
                {comments.length} comentario{comments.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg 
                       border border-accent-sage/20 animate-slide-up">
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
};