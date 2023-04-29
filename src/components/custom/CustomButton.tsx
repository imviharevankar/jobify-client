import { Button } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ReactElement } from 'react';

interface ICustomButton {
  label?: string,
  disabled?: boolean,
  className?: string,
  shape?: 'circle' | 'default' | 'round' | undefined,
  size?: SizeType,
  icon?: ReactElement | string,
  loading?: boolean,
  onClick?: () => void,
  htmlType?: 'submit' | 'button' | 'reset' | undefined
}

const CustomButton = (props: ICustomButton) => {
  const {
    label = '',
    className = '',
    disabled = false,
    shape = 'default',
    icon = '',
    size = 'middle',
    loading = false,
    onClick = () => null,
    htmlType = 'submit',
  } = props;
  return (
    <Button
      className={className}
      disabled={disabled}
      onClick={onClick}
      shape={shape}
      icon={icon}
      size={size}
      loading={loading}
      htmlType={htmlType}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
