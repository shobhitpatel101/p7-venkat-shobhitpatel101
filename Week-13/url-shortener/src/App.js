import { useState } from 'react';
import './App.css';

function Header(){
  return(
    <div className='flex-container'>
      <div>
        <span className='flex-container-span'>Shortly</span>
      </div>

      <div className='flex-conatiner-div'>
        <span>Features</span>
        <span>Pricing</span>
        <span>Resources</span>
      </div>

      <div>
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </div>
  );
}

function MainBody(){
  const [Items, setItems] = useState([]);
  let inputValue = '';

  function onClickhandler(text){
      let url = 'https://api.shrtco.de/v2/shorten?url=' + text
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data['result']);
        let newArray = []
        // newArray.push(['Original link : ', data['result']['original_link']])
        newArray.push(['Full Short link : ', data['result']['full_short_link']])
        newArray.push(['Full Short link 2 : ', data['result']['full_short_link2']])
        newArray.push(['Full short Link 3 : ', data['result']['full_short_link3']])
        setItems(newArray);
      })
      .catch((err) => { 
        console.log(err.message);
      });
  }

  return(
    <div className='mainbody'>  
        <div className='flex-container-body'>
          <div>
              <h1>More than just shorter Links</h1>
              <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
          </div>

          <div>
              <img src='https://cdn1.careeraddict.com/uploads/article/59904/illustration-man-stretching.jpg' height={ '200px'}></img>
          </div>
        </div>

        <div className='flex-conatiner-body-input'>
          <input type={'text'} placeholder='Shorten a link here...' onChange={(e) =>{inputValue = e.target.value}}></input>
          <button onClick={()=>{
              onClickhandler(inputValue);
              console.log(inputValue);

          }}>{'Shorten it!'}</button>
        </div>

              { 
                Items.map((item, index) => (
                  <div className='flex-conatiner-body-input' key={index}>
                    <span style={{color: 'green'}}><b> {item[0]} </b> </span>
                    <span style={{fontWeight: 'bold'}}> {item[1]} </span>
                    <button onClick={()=>{
                      navigator.clipboard.writeText(item[1]);
                    }}>{'Copy'}</button>
                  </div>
                ))
              }
        
    </div>
  )
}


function Footer(){
  return(
    <div className='flex-container-footer'>
      <div>
        <h1>Shortly</h1>
      </div>

      <div>
        <h3>Features</h3>
        <p>Link Shortning</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>

      <div>
        <h3>Resources</h3>
        <p>Blog</p>
        <p>Developer</p>
        <p>Support</p>
      </div>

      <div>
        <h3>Company</h3>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>

      <div>
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </div>
  )
}



function App() {
  return (
    <>
      <Header/>
      <MainBody/>
      <Footer/>
    </>
  );
}

export default App;
