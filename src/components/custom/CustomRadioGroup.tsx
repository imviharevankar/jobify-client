import { Radio, RadioChangeEvent, Space } from 'antd'
import { FC } from 'react';

interface IRadioObject {
  label: string,
  value: string,
}
interface ICustomRadioButton {
  items: IRadioObject[],
  onChange?: (event: RadioChangeEvent) => void,
  label?: string,
  direction?: 'horizontal' | 'vertical',
  labelClassName?: string,
  radioClassName?: string,
  value?: string,
  defaultColor?: string,
  activeColor?: string,
  spaceClassName?: string,
}

const CustomRadioGroup: FC<ICustomRadioButton> = (props) => {
  const {
    items,
    onChange = () => null,
    direction = 'horizontal',
    label = '',
    labelClassName = '',
    radioClassName = '',
    value = 0,
    defaultColor = '',
    activeColor = '',
    spaceClassName = '',
  } = props;
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction={direction} className={spaceClassName}>
        <p className={labelClassName}>{label}</p>
        {
          items?.map((item: IRadioObject) => (
            <Radio className={radioClassName}
              key={item?.value}
              value={item.value}
              style={{
                ...(value === item.value ? {
                  color: activeColor,
                } : { color: defaultColor })
              }}
            >
              {item?.label}
            </Radio>
          ))
        }
      </Space>
    </Radio.Group>
  )
}

export default CustomRadioGroup;
