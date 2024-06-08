import Carousel from 'react-bootstrap/Carousel';

import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'

const style_image = {
    "height": "20rem",
    "width": "100%"
}

const Slider = ()=> {
  return (
    <Carousel interval="5000">
      <Carousel.Item>
        <img src={banner1} alt='image' style={style_image}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner2} alt='image' style={style_image}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner3} alt='image' style={style_image}/>
        <Carousel.Caption>
        <h3>third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;