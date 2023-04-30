import { Carousel } from 'antd'
import { CarouselEffect, DotPosition } from 'antd/es/carousel';
import { ReactNode } from 'react';
interface ICustomCarousel {
  body: ReactNode,
  autoPlay?: boolean,
  dotPostion?: DotPosition,
  dots?: boolean | {
    className?: string;
  },
  easing?: string,
  effect?: CarouselEffect,
}
const CustomCarousel = (props: ICustomCarousel) => {
  const {
    autoPlay = true,
    dotPostion = 'bottom',
    dots,
    easing = 'linear',
    effect = 'fade',
    body,
  } = props;

  return (
    <Carousel
      autoplay={autoPlay}
      dotPosition={dotPostion}
      dots={dots}
      easing={easing}
      effect={effect}
      className='flex col_start space_between'
    >
      {body}
    </Carousel>
  )
}

export default CustomCarousel;
