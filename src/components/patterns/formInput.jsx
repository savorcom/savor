import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  id,
  inputClass,
  label,
  labelClass,
  placeholder,
  type,
}) => {
  if (type === 'textarea') {
    return (
      <div>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <textarea
          id={id}
          name={id}
          className={`form-input ${inputClass}`}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={`form-input ${inputClass}`}
        placeholder={placeholder}
      />
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  inputClass: '',
  labelClass: '',
  placeholder: '',
  type: 'text',
};

export default FormInput;
