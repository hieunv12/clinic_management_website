import { addUserService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
  
export const useAddUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newUser: { username: string }) => addUserService(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); // Làm mới danh sách người dùng
    },
  });
};