const InputComponent = ({
  label,
  formik,
  name,
  type,
  className,
  placeholder = '',
}) => {
  return (
    <div className={className}>
      <label
        className='mb-2 flex flex-row text-sm text-gray-500'
        htmlFor={name}
      >
        {label}
        {formik.touched[name] && formik.errors[name] ? (
          <div className='ml-2 flex-1 text-left text-xs text-rose-500'>
            {formik.errors[name]}
          </div>
        ) : null}
      </label>
      <input
        dir='ltr'
        placeholder={placeholder}
        className='focus:ring-primary w-full rounded border border-gray-200 p-2 text-left text-sm
            outline-none focus:border-transparent focus:outline-none focus:ring-2'
        type={type || 'text'}
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
    </div>
  );
};

export default InputComponent;
