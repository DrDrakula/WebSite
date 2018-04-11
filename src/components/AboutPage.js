import React from 'react'
import { connect } from 'react-redux'

const AboutPage = (props) => {

  function handleText(){
    if(props.isSerbian){
      return (
        <div className='container'>
          <h2>Ћао свима!</h2>
          <br/>
          <p>
            Ја се зовем Немања Дракуловић и бавим се веб девелопментом. Дошао сам у
            Америку у Јануару 2016. Пре тога сам учио информатику на српском универзитету.
            На жалост сам морао да напустим школу, зато што је мој отац освојио зелену карту
            на лутрији, и моја породица и ја смо морали да се преселимо у Америку. Након
            селидбе сам почео да идем на курс за компјутерски хардвер. Убрзо након тога
            сам положио испите и добио сертификате за А+ и Network+, и добио посао као
            компјутерски техничар.
          <br/>
          <br/>
            Програмирање ме је интересовало још од 15. године. Увек ме је фасцинирало
            како су се правиле игрице које сам играо и сајтови које сам посећивао,
            па сам одлучио да научим, како да се бавим <a id='steam' href='https://steamcommunity.com/id/drdrakula96/' target='_blank' rel="noopener noreferrer" style={{'color':'black','textDecoration':'none','cursor':'text'}}>с тим</a>.
            Разлог због којег сам одлучио да се бавим веб девелопментом јесте како бих
            омогућио другима слична позитивна искуства. Када сам зарадио довољно пара
            одлучио сам да напустим посао и упишем Flatiron School, како бих пратио свој
            сан и постао професионални веб девелопер.
          </p>
        </div>
      )
    }else{
      return (
        <div className='container'>
          <h2>Hi Everyone!</h2>
          <br/>
          <p>
            My name is Nemanja Drakulovic, and I'm a Full Stack Web Developer.
            I came to America in January 2016. Before that I used to study Computer
            Science in a Serbian university. Unfortunately I had to drop out because
            my father won the green card lottery and me and my familly had to move to the US.
            After moving I started taking a course in computer hardware. Soon after
            I got certified in A+ and Network+ and got a job as a Computer Technician.
          <br/>
          <br/>
            I was interested in programing since I was 15. It always fascinated me on how
            video games and websites were built, so I decided I wanted to learn how to do it
            and with that create a positive experience that I felt while playing games
            or surfing the internet with many, many others. So, when I made enough money,
            I made a move and left my job to join Flatiron School and pursue my
            dream in becoming a professional web developer.
          </p>
        </div>
      )
    }
  }

  return (
    <div>
      {handleText()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    cheat: state.cheat,
    isSerbian: state.isSerbian,
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(AboutPage)
