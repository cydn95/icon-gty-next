interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validatePassword(password: string): ValidationResult {
  const errors: string[] = [];
  // Kiểm tra độ dài mật khẩu
  if (password.length < 8) {
    errors.push('Mật khẩu phải có ít nhất 8 ký tự.');
  }
  // Kiểm tra sự hiện diện của các ký tự không hợp lệ
  if (/[^A-Za-z0-9@$!%*#?&]/.test(password)) {
    errors.push('Mật khẩu chứa ký tự không hợp lệ.');
  }
  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateUsername(username: string): ValidationResult {
  const errors: string[] = [];
  // Kiểm tra độ dài username
  if (username.length < 6 || username.length > 20) {
    errors.push('Username phải có từ 6 đến 20 ký tự.');
  }
  // Kiểm tra sự hiện diện của các ký tự không hợp lệ
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errors.push(
      'Username chỉ được chứa các ký tự chữ cái (hoa hoặc thường), chữ số và dấu gạch dưới.'
    );
  }
  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateEmail(email: string): ValidationResult {
  const errors: string[] = [];
  // Biểu thức chính quy kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push('Email không hợp lệ.');
  }
  return {
    isValid: errors.length === 0,
    errors,
  };
}
