import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostList } from '../components/PostList';
import { SearchInput } from '../components/SearchInput';
import { UserFilter } from '../components/UserFilter';
import { Pagination } from '../components/Pagination';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { EmptyState } from '../components/EmptyState';
import { usePosts } from '../hooks/usePosts';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const {
    posts,
    users,
    loading,
    searchTerm,
    selectedUserId,
    paginationInfo,
    handleSearch,
    handleUserFilter,
    handlePageChange
  } = usePosts();

  const handlePostClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  if (loading) {
    return <LoadingSpinner size="lg" message="Cargando publicaciones..." />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-peach/30 via-white to-accent-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-accent-charcoal mb-4">
            Explora Publicaciones
          </h1>
          <p className="text-lg text-accent-charcoal/70 max-w-2xl mx-auto">
            Descubre contenido interesante, navega por las publicaciones y únete a las conversaciones
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SearchInput
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar en títulos y contenido..."
            />
          </div>
          <div>
            <UserFilter
              users={users}
              selectedUserId={selectedUserId}
              onUserSelect={handleUserFilter}
            />
          </div>
        </div>

        {/* Results Info */}
        {(searchTerm || selectedUserId) && (
          <div className="mb-6 px-4 py-3 bg-accent-mint/10 rounded-xl border border-accent-mint/20">
            <p className="text-accent-charcoal/80">
              {posts.length === 0 
                ? 'No se encontraron resultados'
                : `Mostrando ${posts.length} publicación(es) en la página ${paginationInfo.currentPage} de ${paginationInfo.totalPages}`
              }
            </p>
          </div>
        )}

        {/* Posts */}
        {posts.length === 0 ? (
          <EmptyState 
            type={searchTerm || selectedUserId ? 'search' : 'posts'} 
          />
        ) : (
          <>
            <PostList
              posts={posts}
              users={users}
              onPostClick={handlePostClick}
            />
            
            {paginationInfo.totalPages > 1 && (
              <Pagination
                paginationInfo={paginationInfo}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};