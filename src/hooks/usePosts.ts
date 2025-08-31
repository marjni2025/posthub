import { useState, useEffect } from 'react';
import { Post, User, PaginationInfo } from '../types';
import { apiService } from '../services/api';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [postsData, usersData] = await Promise.all([
          apiService.getAllPosts(),
          apiService.getUsers()
        ]);
        setAllPosts(postsData);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filtrar y paginar posts
  useEffect(() => {
    let filteredPosts = allPosts;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por usuario
    if (selectedUserId) {
      filteredPosts = filteredPosts.filter(post => post.userId === selectedUserId);
    }

    // Paginación
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    setPosts(paginatedPosts);
  }, [allPosts, searchTerm, selectedUserId, currentPage]);

  const filteredPostsCount = () => {
    let count = allPosts.length;
    
    if (searchTerm) {
      count = allPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
      ).length;
    }
    
    if (selectedUserId) {
      const searchFiltered = searchTerm 
        ? allPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : allPosts;
      
      count = searchFiltered.filter(post => post.userId === selectedUserId).length;
    }
    
    return count;
  };

  const paginationInfo: PaginationInfo = {
    currentPage,
    totalPages: Math.ceil(filteredPostsCount() / postsPerPage),
    hasNext: currentPage < Math.ceil(filteredPostsCount() / postsPerPage),
    hasPrev: currentPage > 1
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleUserFilter = (userId: number | null) => {
    setSelectedUserId(userId);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    posts,
    users,
    loading,
    searchTerm,
    selectedUserId,
    paginationInfo,
    handleSearch,
    handleUserFilter,
    handlePageChange
  };
};