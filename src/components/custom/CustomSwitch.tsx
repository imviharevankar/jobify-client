import { Switch } from 'antd';
import { FC } from 'react'

interface ICustomSwitch {
  name: string
  label?: string,
  className?: string,
  labelClassName?: string,
}

const CustomSwitch: FC<ICustomSwitch> = (props) => {
  const {
    name,
    label,
    className = 'flex_start_center',
    labelClassName = ''
  } = props;
  return (
    <div className={className}>
      {
        label
          ? <label className={labelClassName} htmlFor={name}>
            {label}
          </label>
          : ''
      }
      <Switch id={name} />
    </div>

  )
}

export default CustomSwitch;
