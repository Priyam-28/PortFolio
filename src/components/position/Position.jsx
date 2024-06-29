
import { Cursor, Typewriter } from "react-simple-typewriter";


const Position = () => {


  return (
    <div className='App'>
      <h1 style={{ fontWeight: 'bold', color:'#4BC5C0' }}>
        I am a{' '}
        <span style={{ color: '#F55F17', fontWeight: 'bolder' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Developer","Casual Gamer","Robotics Enthusiast" ]}
            loop={1000}
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
        </span>
        <span>
          <Cursor cursorColor="|" cursorBlinking/>
        </span>
      </h1>
    </div>
  );
};

export default Position;
