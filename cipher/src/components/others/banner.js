import gaurang from './gaurang.png';
import background from './background.png'
import './banner.css';
const banner=()=>{
    return <>
    {/* <div className='wrap'> */}
    <div style={{display:"flex" ,justifyContent:"space-between"}} className='banner'>
        <img src={background} className='backimage' alt="ny"/> 
        
        <div style={{display:"flex" }} className='profile'>
        <span >
            <img src={gaurang} alt="profile" style={{borderRadius:"50%"}} className='photo'/>
        </span>
        <span className='detail'>
            <p>Hello,<br/>
            <span className='name'>Gaurang Bhutani</span><br/>gaurangbhutani14@gmail.com</p>
        </span>
        </div>
        <div className='follow'>
            <p>0 Folllowers</p>
        </div>
    </div>
    {/* </div> */}
    
    </>
}

export default banner;