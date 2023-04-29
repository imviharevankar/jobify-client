import { FC } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface ICustomCheckBox {
  label: string,
  className?: string,
}
const CustomCheckBox: FC<ICustomCheckBox> = (props: ICustomCheckBox) => {
  const { label, className } = props
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Checkbox onChange={onChange} className={className}>{label}</Checkbox>
  );
};



export default CustomCheckBox;