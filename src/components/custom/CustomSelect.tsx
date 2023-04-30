import { Select } from 'antd';
import cx from 'classnames';
import { FC, ChangeEventHandler } from 'react';
import FormLabel from '../FormLabel';
import ErrorContainer from '../ErrorContainer';

export interface ISelectOption {
  value: string,
  label: string,
}

interface ICustomSelect {
  name?: string,
  label?: string,
  required?: boolean,
  value: string | number | string[],
  options?: ISelectOption[],
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
  className?: string,
  disabled?: boolean,
  touched?: boolean | undefined,
  error?: string | undefined | string[],
  mode?: "multiple" | "tags" | undefined,
}

const CustomSelect: FC<ICustomSelect> = (
  {
    label = '',
    value,
    options,
    onChange,
    className,
    disabled,
    touched,
    required = true,
    error,
    mode = undefined,
  },
) => {
  console.group(value);
  return (
    <>
      <FormLabel label={label} required={required} />
      <Select
        mode={mode}
        className={cx('w_100', className)}
        onChange={onChange}
        disabled={disabled}
        options={options}
      >
      </Select>
      <ErrorContainer touched={touched} error={error} />
    </>
  );
};

export default CustomSelect;