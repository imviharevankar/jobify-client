import { ChangeEventHandler, FC, FocusEventHandler, ReactElement } from 'react';
import cx from 'classnames';
import { Input } from 'antd';
import ErrorContainer from '../ErrorContainer';
import FormLabel from '../FormLabel';

interface ICustomInput {
  label?: string,
  required?: boolean,
  value?: string | number,
  name?: string,
  error?: string | undefined,
  touched?: boolean | undefined,
  className?: string,
  min?: number,
  max?: number,
  maxLength?: number,
  minLength?: number,
  disabled?: boolean,
  type?: string,
  suffixIcon?: ReactElement,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
  onBlur?: FocusEventHandler<HTMLInputElement>,
}

const CustomInput: FC<ICustomInput> = (props) => {
  const {
    min,
    max,
    maxLength,
    minLength,
    label = '',
    required = true,
    error,
    value,
    name,
    touched,
    className,
    disabled,
    type = 'text',
    suffixIcon = <></>,
    onChange = () => null,
    onBlur = () => null,
  } = props;
  return (
    <>
      <FormLabel label={label} required={required} />
      <Input
        className={cx('custom_input poppins1624500Charcoal', className)}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        min={min}
        max={max}
        maxLength={maxLength}
        minLength={minLength}
        disabled={disabled}
        suffix={suffixIcon}
        status={error && 'error'}
      />
      <ErrorContainer touched={touched} error={error} />
    </>
  );
};

export default CustomInput;
