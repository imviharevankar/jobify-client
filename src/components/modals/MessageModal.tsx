import { FC, ReactElement } from 'react'
import CustomModal from '../custom/CustomModal';
import CustomButton from '../custom/CustomButton';

interface IMessageModal {
  open: boolean,
  okCancel: () => void,
  icon?: ReactElement,
  subTitle?: string,
  message?: string,
  btnText?: string,
  btnAction?: () => void,
}
const MessageModal: FC<IMessageModal> = (props: IMessageModal) => {

  const {
    open,
    okCancel,
    icon = <></>,
    subTitle = '',
    message = '',
    btnText = '',
    btnAction = () => null,
  } = props;

  return (
    <CustomModal
      open={open}
      okCancel={okCancel}
      modalBody={
        <div className='text_center'>
          {icon}
          <p className='font_primary fs_18 lh_20 fw_700 charcoal my_16'>{subTitle}</p>
          <p className='poppins1421400Charcoal'>{message}</p>
          <CustomButton
            className='mt_16'
            label={btnText}
            onClick={btnAction}
          />
        </div>
      }
      width={400}
      centered
    />
  )
}

export default MessageModal