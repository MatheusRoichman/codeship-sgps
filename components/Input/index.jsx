export default function Input({
  type,
  name,
  placeholder,
  required,
  onChange = (event) => event.target.value,
  onBlur = () => null,
  className='',
  fullWidth = false,
  value = '' 
}) {
  return (
    <>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`border shadow rounded-md py-3 px-4 w-${fullWidth ? 'full' : '[20rem]'} ${className}`}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
}