import { useEffect, useState } from 'react'
import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Banner = () => {

  const slides = [
    {
      url: 'https://www.guidingtech.com/wp-content/uploads/iPhone-15-and-iPhone-15-Pro-Series-Wallpapers-4K_1.jpg'
    },
    {
      url: 'https://staticg.sportskeeda.com/editor/2023/02/a1e78-16754375252513-1920.jpg'
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/dCZaAw7WRQBgTRry96V9uK.jpg'
    },
    {
      url: 'https://www.ororedemption.com/wp-content/uploads/2023/05/banner_enSG_P7a_1920x1080_0523_Sea_Launch_ORO_v1.jpg'
    }
  ]


  const textContent = [
    {
      title: 'Title 1',
      description: 'Latest Iphones Are Here',
    },
    {
      title: 'Title 2',
      description: <div className='text-black/70'>Buy Latest Google Pixel</div>,
    },
    {
      title: 'Title 3',
      description: '',
    },
    {
      title: 'Title 4',
      description: '',
    },
  ];

  const [index, setIndex] = useState(1);

  const prevslide = () => {
    const newindex = (index - 1 + slides.length) % slides.length;
    setIndex(newindex);
  }

  const nextslide = () => {
    const newindex = (index + 1) % slides.length;
    setIndex(newindex);
  }

  const gotoSlide = (slideIndex) => {
    setIndex(slideIndex);
  }

  const autoSlide = () => {
    const newindex = (index + 1) % slides.length;
    setIndex(newindex);
  }

  useEffect(() => {
    const intervalId = setInterval(autoSlide, 10000); 
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div>
        <div className="grid w-full bg-cover bg-no-repeat bg-center items-center md:h-[600px] h-[300px]" style={{backgroundImage: `url(${slides[index].url})`}}>
            <div data-aos="fade-up" className="hero-content justify-start lg:px-[200px] md:px-[100px]">
                <div className="max-w-2xl">
                    
                    <div className='flex gap-5'>
                        <div className='bg-white md:h-14 w-1'></div>
                        <p className="font-bold text-5xl text-white">{textContent[index].description}</p>
                    </div>
                                        
                </div>
            </div>

          <div className='flex justify-between px-4'>
            <div onClick={prevslide} className='w-14 hidden md:block bg-slate-500/40 hover:scale-110 duration-200 text-white p-3 rounded-xl'>
              <BsChevronDoubleLeft  size={30} />
            </div>

            <div onClick={nextslide} className='w-14 hidden md:block bg-slate-500/40 hover:scale-110 duration-200 text-white p-3 rounded-xl'>
              <BsChevronDoubleRight size={30} />
            </div>
          </div>
          
          
        </div>


        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => gotoSlide(slideIndex)} className='text-2xl cursor-pointer'>
              <RxDotFilled size={30} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Banner