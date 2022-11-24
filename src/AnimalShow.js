import {useState} from "react";
import bird from './images/svg/bird.svg'
import cat from './images/svg/cat.svg'
import cow from './images/svg/cow.svg'
import dog from './images/svg/dog.svg'
import gator from './images/svg/gator.svg'
import heart from './images/svg/heart.svg'
import horse from './images/svg/horse.svg'


const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart
}

function AnimalShow({type}){
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return (
    <div onClick={handleClick}>
      <img src={svgMap[type]} alt="animal" style={{width: 50 + 'px', height: 'auto'}}/>
      <img src={svgMap['heart']} alt="heart" style={{ width: 10 + 10 * clicks + 'px'}}/>
    </div>
  )
}

export default AnimalShow