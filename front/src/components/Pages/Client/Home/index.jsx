import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import { FaPlay } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";



const Home = () => {

    const [toy, setToy] = useState([])
    const getData = async () => {
        const res = await axios.get("http://localhost:5050/toys")
        setToy(res.data)
    }


    const deletToy = async(id)=>{
        await axios.delete(`http://localhost:5050/toys/${id}`)
        await getData()
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className='home-container'>
            <div className='home-parent'>
                <div className='first-section'>
                    <div className='free' style={{maxWidth: '1440px'}}>
                        <p>Say Hello to ToyStore!</p>
                        <h1>Free Ecommerce Template for Webflow</h1>
                        <a href="">Open Catalog</a>
                    </div>
                </div>

                <div className='shop'>
                    <div className="shop-parent">
                        <div className='bear'>
                            <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png" alt="" />

                            <div className='animals'>
                                <h3>
                                    Stuffed Animals
                                </h3>
                                <a href="">Shop Now</a>
                            </div>
                        </div>

                        <div className='bear' style={{ backgroundColor: 'purple' }}>
                            <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png" alt="" />

                            <div className='animals'>
                                <h3>
                                    Wooden Toys
                                </h3>
                                <a href="">Shop Now</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='stuf'>
                    <h2>Stuffed Animals</h2>
                    <div className='divs'>
                        <div className='div'>

                        </div>
                        <div className='div2'>

                        </div>
                    </div>
                </div>

                <div className='cart-parent'>
                    {
                        toy
                            .map((t) => (
                                <div className='cart' key={t._id}>
                                    <img src={t.img} alt="" />
                                    <h2>{t.name}</h2>
                                    <p>${t.price}.00</p>
                                    <button onClick={()=>deletToy(t._id)}>delet</button>
                                </div>
                            ))
                    }
                </div>



                <div className='stuf'>
                    <h2>Wooden Toys</h2>
                    <div className='divs'>
                        <div className='div'>

                        </div>
                        <div className='div2'>

                        </div>
                    </div>
                </div>

                <div className='cart-parent'>
                    {
                        toy
                            .map((t) => (
                                <div className='cart'>
                                    <img src={t.img} alt="" />
                                    <h2>{t.name}</h2>
                                    <p>${t.price}.00</p>
                                </div>
                            ))
                    }
                </div>


                <div className='bg-image'>
                    <div className='text'>
                        <p>About The Shop</p>
                        <h1>Watch Our Story</h1>
                        <p>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>

                        <div className='play' >
                            <FaPlay className='icon-play' />
                        </div>
                    </div>
                </div>


                <div className='made'>
                    <div className='simple'>
                        <p>Made for Webflow</p>
                        <h1>Simple & Colorful Ecommerce Template for Your Business</h1>
                    </div>
                    <div className='for'>
                        <div className='for-free'>
                            <h1>Available for FREE!</h1>
                            <div></div>
                            <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                            <button>GET IT NOW!</button>
                        </div>

                        <div className='for-image'>
                            <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='sub-parent'>
                    <div className='sub'>
                        <div>
                            <FaTelegramPlane className='telegram' />
                        </div>
                        <h1>Subscribe to our newsletter
                            & get <h1 style={{color: "#a5c926", fontSize: '30px', display: 'inline'}}>10% discount!</h1></h1>
                    </div>

                    <form action="">
                        <input type="text" placeholder='Enter your email address'/>
                        <button>Subscribe</button>
                    </form>
                </div>

                <div className='instagram'>
                    <div className='elastic'>
                        <p>@ElasticThemes</p>
                        <h2>We're on Instagram!</h2>
                    </div>

                    <div className='insta-image'>
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" alt="" />
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" alt="" />
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" alt="" />
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" alt="" />
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" alt="" />
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" alt="" />
                    </div>

                    <div className='insta-btn'>
                        <button>See More Photos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home