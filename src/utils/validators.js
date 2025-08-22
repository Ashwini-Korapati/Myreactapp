
export const validators = {
  name: (value) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!value) return 'Name is required';
    if (!nameRegex.test(value)) return 'Name should contain only alphabets';
    if (value.length < 2) return 'Name should be at least 2 characters';
    return '';
  },

  username: (value) => {
    const usernameRegex = /^[a-zA-Z0-9@#$%^&*()_+\-=\[\]{}|;':",./<>?]+$/;
    if (!value) return 'Username is required';
    if (value.length < 3) return 'Username should be at least 3 characters';
    if (!usernameRegex.test(value)) return 'Username can contain alphanumeric and special characters';
    return '';
  },

  password: (value, username = '') => {
    const passwordRegex = /^[a-zA-Z0-9@#$%^&*()_+\-=\[\]{}|;':",./<>?]+$/;
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password should be at least 6 characters';
    if (!passwordRegex.test(value)) return 'Password can contain alphanumeric and special characters';
    if (value === username) return 'Password should not be same as username';
    return '';
  },

  confirmPassword: (value, password) => {
    if (!value) return 'Please confirm your password';
    if (value !== password) return 'Passwords do not match';
    return '';
  },

  email: (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) return 'Email is required';
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
  },

  phone: (value) => {
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!value) return 'Phone number is required';
    if (!phoneRegex.test(value)) return 'Please enter valid phone number with country code (e.g., +1234567890)';
    return '';
  }
};
