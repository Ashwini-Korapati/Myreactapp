const LoadingSpinner = ({ size = 5 }) => (
  <div className={`animate-spin rounded-full h-${size} w-${size} border-2 border-white border-t-transparent`} />
);

// Input Field Component
const InputField = ({ 
  icon: Icon, 
  type, 
  placeholder, 
  value, 
  onChange, 
  error, 
  showPasswordToggle, 
  onTogglePassword,
  name
}) => {
  return (
    <div className="space-y-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon className={`h-5 w-5 ${error ? 'text-red-400' : 'text-gray-400'}`} />
        </div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
            error 
              ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
              : 'border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
          }`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
          >
            {type === 'password' ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        )}
      </div>
      {error && (
        <div className="flex items-center space-x-2 text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </div>
  );
};