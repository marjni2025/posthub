import React from 'react';
import { User as UserIcon, X } from 'lucide-react';
import { User } from '../types';

interface UserFilterProps {
  users: User[];
  selectedUserId: number | null;
  onUserSelect: (userId: number | null) => void;
}

export const UserFilter: React.FC<UserFilterProps> = ({
  users,
  selectedUserId,
  onUserSelect
}) => {
  const selectedUser = users.find(user => user.id === selectedUserId);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-accent-charcoal font-medium">
        <UserIcon className="h-5 w-5" />
        <span>Filtrar por Usuario</span>
      </div>
      
      {selectedUser && (
        <div className="flex items-center gap-2 px-3 py-2 bg-accent-mint/20 
                       rounded-lg border border-accent-mint/30">
          <span className="text-sm text-accent-charcoal">
            Mostrando posts de: <strong>{selectedUser.name}</strong>
          </span>
          <button
            onClick={() => onUserSelect(null)}
            className="p-1 hover:bg-accent-mint/30 rounded-full transition-colors"
          >
            <X className="h-4 w-4 text-accent-charcoal" />
          </button>
        </div>
      )}
      
      <select
        value={selectedUserId || ''}
        onChange={(e) => onUserSelect(e.target.value ? Number(e.target.value) : null)}
        className="w-full px-4 py-3 border border-accent-sage/30 rounded-xl 
                 bg-white/80 backdrop-blur-sm text-accent-charcoal
                 focus:outline-none focus:ring-2 focus:ring-accent-mint 
                 focus:border-transparent transition-all duration-200 
                 hover:bg-white/90"
      >
        <option value="">Todos los usuarios</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};