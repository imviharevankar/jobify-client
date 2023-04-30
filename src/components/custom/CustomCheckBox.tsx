import { FC } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface ICustomCheckBox {
  label: string,
  className?: string,
  onChange?: (e: CheckboxChangeEvent) => void,
}
const CustomCheckBox: FC<ICustomCheckBox> = (props: ICustomCheckBox) => {
  const { label, className, onChange } = props

  return (
    <Checkbox onChange={onChange} className={className}>{label}</Checkbox>
  );
};



export default CustomCheckBox;