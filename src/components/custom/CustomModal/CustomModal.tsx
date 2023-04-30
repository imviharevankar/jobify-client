import { Modal } from 'antd';
import { ReactElement, ReactNode } from 'react';

interface ICustomModal {
  open: boolean,
  modalBody: ReactNode | ReactElement,
  okCancel: () => void,
  footer?: ReactElement,
  title?: ReactNode | string,
  centered?: boolean,
  width?: number | string,
};

const CustomModal = (props: ICustomModal) => {
  const {
    open,
    modalBody,
    okCancel,
    footer = <></>,
    title = '',
    centered = false,
    width = '',
  } = props;

  return (
    <Modal
      open={open}
      title={title}
      onCancel={okCancel}
      footer={footer}
      maskClosable={false}
      centered={centered}
      rootClassName='modal'
      width={width}
      closable={title ? true : false}
    >
      {
        title
          ? <div className='h_1 bg_separator_grey -mx_24' />
          : ''
      }
      {
        modalBody
      }
    </Modal>
  )
}

export default CustomModal;
