import React from 'react'
import './Homes.css'
import backgroundImage from '../Assets/bg1.jpg'
// import feeback from '../Assets/feedback.png'
// import view1 from '../Assets/pg1.jpg'
// import view2 from '../Assets/pg2.jpg'
// import view3 from '../Assets/p3.jpg'
// import view4 from '../Assets/p4.jpg'
// import view5 from '../Assets/p5.jpg'
// import view6 from '../Assets/p6.jpg'


const Homes = () => {
  return (
    <>
    <div className='container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='container-para'>
        <p>LET's COME WITH</p>
        <p>YAATRII TO</p>
        <p>EXPLORE THE WORLD!</p>
      </div>
      {/* Add other content as needed */}
      <div className="container-text">
      Click here To Explore 
      <br></br><span>watch the video ------→</span>
     
      <div className='containers-boxs'>

    <div className="containers-box" id='box1'>
    <a href="https://www.youtube.com/shorts/S6wJ0WDU650" ><button className='video-link'>Watch Video</button></a>
    </div>

    <div className="containers-box" id='box2'>
    <a href="https://www.youtube.com/shorts/ZvLt_S4GzpY" ><button className='video-link'>Watch Video</button></a>
    </div>

    <div className="containers-box" id='box3'>
    <a href="https://www.youtube-nocookie.com/embed/luDdKCXuKks?playlist=luDdKCXuKks&autoplay=1&iv_load_policy=3&loop=1&start=" ><button className='video-link'>Watch Video</button></a>
    </div>

    <div className="containers-box" id='box4'>
    <a href="https://www.youtube.com/shorts/kXy8HSzVhWg" ><button className='video-link'>Watch Video</button></a>
    </div>

    <div className="containers-box" id='box5'>
    <a href="https://www.youtube.com/shorts/SmBLLWDg-9Q" ><button className='video-link'>Watch Video</button></a>
    </div>
   
    </div>
    </div>   
    </div>
    

   
    <div className="packages">
    <h1 className='package'>POPULAR PACKAGE</h1>
    <span className='package-info'>Welcome to yaatrii.com, your one-stop shop for all your travel needs. Whether you're 
looking to book a tour, find a guide, or simply learn more about a new destination, 
yaatrii.com has everything you need. We offer a wide variety of tours to choose from, 
including cultural tours, adventure tours, and eco-tours. Our expert guides are 
passionate about their homelands and will ensure you have an unforgettable 
experience. And our comprehensive destination guides will help you plan your trip down 
to the last detail.</span>
    
     <div className="packagedisplay">
     <div className='packagedisplay-texts'>
      <h2 id='top'>TOP POPULAR PACKAGE</h2><br></br>
      <h3 id='top1'>Book Here !</h3><br></br>
      </div>
      <div className='packagesiplays-view'>
      <div className="packagedisplay-view" id='view1'>
        <h4>kashmir 2D/1N
starting at ₹11999-/
per person</h4>
      </div>
      <div className="packagedisplay-view" id='view2'>
        <h4>
        Agra 3D/2N
starting at ₹12999-/
per person 
        </h4>
      </div>
      <div className="packagedisplay-view" id='view3'>
        <h4>
        mumbai 4D/3N
starting at ₹10999-/
per person 
        </h4>
      </div>
      <div className="packagedisplay-view" id='view4'>
        <h4>
        New Delhi 2D/1N
starting at ₹11899-/
per person
        </h4>
      </div>
      <div className="packagedisplay-view" id='view5'>
        <h4>
        jaipur 4D/3N
starting at ₹11999-/
per person
        </h4>
      </div>
      <div className="packagedisplay-view" id='view6'>
        <h4>
        chandigharh 4D/3N
starting at ₹14999-/
per person
        </h4>
      </div>
     </div>
     </div>



     <div className="guidedisplay">
     <div className='guidedisplay-texts'>
      <h2 id='tops'>TOP Rated Tourist Guide</h2><br></br>
      <h3 id='tops1'>Book Here !</h3><br></br>
      </div>
      <div className='guidesiplays-view'>
      <div className="guidedisplay-view" id='guide1'>
        <h4>Gurinder Singh Johal 
Rating ⭐⭐ ⭐ ⭐ 
starting at ₹11999-/
</h4>
<button id='hire'>Book</button>
      </div>
     
      <div className="guidedisplay-view" id='guide2'>
        <h4>
        Sumrita kumar
Rating ⭐⭐ ⭐ ⭐
starting at ₹12999-/
 
        </h4>
        <button id='hire'>Book</button>
      </div>
      <div className="guidedisplay-view" id='guide3'>
        <h4>
        Ravi shankar kumar
Rating ⭐⭐ ⭐ ⭐
starting at ₹10999-/

        </h4>
        <button id='hire'>Book</button>
      </div>
      <div className="guidedisplay-view" id='guide4'>
        <h4>
        Suraj yajpal yadav 
Rating ⭐⭐ ⭐ ⭐
starting at ₹11899-/

        </h4>
        <button id='hire'>Book</button>
      </div>
      <div className="guidedisplay-view" id='guide5'>
        <h4>
        Hadlee Renjith
Rating ⭐⭐ ⭐ ⭐
starting at ₹11999-/

        </h4>
        <button id='hire'>Book</button>
      </div>
      <div className="guidedisplay-view" id='guide6'>
        <h4>
        Prem Sagar mishra
Rating ⭐⭐ ⭐ ⭐
starting at ₹14999-/

        </h4>
        <button id='hire'>Book</button>
      </div>
     </div>
     </div>
     </div>
     
      <div className="yatriconnect" >
        <div className="connect">
          <h1 className='yatriconnect-headings'>YAATRII CONNECT</h1>
        </div>
       
        <div className="yaatriconnectboxs">

        <div className="yaatriconnectbox" id="yaatriconnectbox1">
         <div className="yaatriconnectbox-content">
    <h1 className='yaatriconnectbox-feedback'>FeedBack</h1>
    <p className="yaatriconnectbox-text">Concise and impactful feedback headings drive clarity and action.</p>
    <button className="yaatriconnectbox-button">Button 1</button>
  </div>
</div>
<div className="yaatriconnectbox" id="yaatriconnectbox2">
  <div className="yaatriconnectbox-content">
  <h1 className='yaatriconnectbox-contact'>Contact Support</h1>
    <p className="yaatriconnectbox-text">Text 2</p>
    <button className="yaatriconnectbox-button">Button 2</button>
  </div>
</div>
<div className="yaatriconnectbox" id="yaatriconnectbox3">
  <div className="yaatriconnectbox-content">
  <h1 className='yaatriconnectbox-reward'>Rewards</h1>
    <p className="yaatriconnectbox-text">Text 3</p>
    <button className="yaatriconnectbox-button">Button 3</button>
  </div>
</div>
        </div>
       
      </div>
     


    
    
   
    
   
     </>
  )
}

export default Homes
