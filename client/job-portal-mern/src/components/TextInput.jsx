

// eslint-disable-next-line react/prop-types
const TextInput = ({ type, placeholder, styles, label, register, name, error }) => {
  return (
    <div className="flex flex-col mt-2">
      <p className="text-gray-600 text-sm mb-1">{label}</p>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`rounded border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-black px-4 py-2 ${styles}`}
        {...register}
        aria-invalid={error ? "true" : "false"}
      />
      
      {error && <span className="text-xs text-red-500 mt-0.5">{error}</span>}
    </div>
  );
};

export default TextInput;
