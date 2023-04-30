import { FC } from 'react';

interface ErrorContainerProps {
  touched: boolean | undefined,
  error: string | undefined | string[],
}

const ErrorContainer: FC<ErrorContainerProps> = (props: ErrorContainerProps) => {
  const { touched, error } = props;
  return (
    <>
      {
        touched && error
          ? <span className='fs_12 lh_12 font_secondary fw_400 error_red'>{error}</span>
          : ''
      }
    </>
  );
};

export default ErrorContainer;
