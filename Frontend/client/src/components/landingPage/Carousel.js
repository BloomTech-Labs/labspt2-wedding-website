import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img
            src='https://i.pinimg.com/originals/9e/84/e0/9e84e075585f2bd99892ff4f1cfd9b77.jpg'
            alt='1'
          />
          <p className='legend'>Image 1</p>
        </div>
        <div>
          <img
            src='https://www.freegreatpicture.com/files/147/18429-hd-color-background-wallpaper.jpg'
            alt='2'
          />
          <p className='legend'>Image 2</p>
        </div>
        <div>
          <img
            src='https://images.designtrends.com/wp-content/uploads/2016/04/02110027/Artistic-Spring-Wallpaper.jpg'
            alt='3'
          />
          <p className='legend'>Image 3</p>
        </div>
      </Carousel>
    )
  }
}

export default DemoCarousel
