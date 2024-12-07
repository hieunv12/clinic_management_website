import axios from 'axios';

// Định nghĩa các loại dữ liệu
export interface User {
  id: string;
  username: string;
}

// Hàm lấy danh sách người dùng
export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('/api/users'); // Thay thế bằng API thực tế
  return data;
};

// Hàm thêm người dùng mới
export const addUserService = async (newUser: { username: string }): Promise<User> => {
  const { data } = await axios.post('/api/users', newUser); // Thay thế bằng API thực tế
  return data;
};
