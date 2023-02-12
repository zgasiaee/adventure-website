import React from 'react'

//style
import styles from '../styles/Cards.module.css'

//component
import Card from './Card'

//img
import muesum from '../assets/muesum.jpeg'
import waterPark from '../assets/waterPark.jpeg'
import angryBird from '../assets/angryBird.jpg'
import shopping from '../assets/shopping.jpeg'
import stadium from '../assets/stadium.jpeg'

export const data = [
  {
    label: 'Culture',
    title: 'National Museum of Qatar',
    description:
      'Designed by Pritzker Prize-winning architect Jean Nouvel, the National Museum of Qatar draws inspiration from and recreates the naturally occurring crystal formations known as the desert rose. Built around Sheikh Abdullah bin Jassim Al-Thani’s original palace, and the seat of government for 25 years, the National Museum of Qatar gives voice to Qatar’s heritage whilst celebrating its future. It spans a whopping 430,500 square feet. ',
    time: 'Saturday-Thursday : 9AM - 7PM' ,
    website: 'https://www.nmoq.org.qa' ,
    img: muesum,
  },
  {
    label: 'Advanture',
    title: 'Desert Falls Water & Adventure Park',
    description: 'Experience the Angry Birds World amusement park in doha in the best way possible with a ticket type that suits you and your family. Our Play Cards will add lots of extra value to your fun and they can even be topped up and used again in outdoor amusement park. Book online or buy when you arrive and benefit from our flexible ticket options when planning your day of adventure.',
    time: 'Everyday : 10AM - 6PM' ,
    website:'https://www.angrybirdsworld.qa' ,
    img: waterPark,
  },
  {
    label: 'Sport',
    title: 'Al Janoub Stadium',
    description:
      'One of eight venues to host the FIFA World Cup 2022, Al Janoub Stadium, was designed by British-Iraqi architect Zaha Hadid.  Located near the former fishing town of Wakrah, draws inspiration from the dhow boats which dot Qatar’s waters, and the pearls which were integral to its economy.  The stadium is slated to be used as a local community venue after the competition.',
    time: 'Everyday : 10AM - 9PM' ,
    website: 'https://www.qatar2022.qa/en/stadiums/al-janoub-stadium',
    img: stadium,
  },
  {
    label: 'Shopping',
    title: 'Mall of Qatar',
    description:
      'Situated next to Al Rayyan Stadium, the Mall of Qatar offers 500 retail, dining, and café options. Every section of the mall, from its distinctive facade to its exciting interiors, holds an element of surprise, promising a memorable experience.  ',
    time: 'Saturday-Wednesday : 10AM - 10PM' ,
    website: 'https://www.mallofqatar.com.qa',
    img: shopping,
  },
  {
    label: 'Advanture',
    title: 'Angry Birds World',
    description: 'The Desert Falls Water and Adventure Park is located at the heart of Salwa beach resort, situated in the southern region of Qatar near the Saudi Arabian border. With over 25 rides, slides and attractions such as the Whizzard Mat Racer, King Cobra and Ship Kids Pool to name a few, this park is one you must not miss while on your holiday in Qatar.',
    time: 'Saturday–Wednesday 10AM - 10PM' ,
    website:'https://www.salwabeachresort.qa/desert-falls-water-adventure-park' ,
    img: angryBird,
  }
  
]

const Cards = () => {
  return (
    <div>
      <h1 className={styles.title}>Check out these EPIC Destinations!</h1>
      <div className={styles.cardsContainer}>
        {data.map((item, index) => (
          <Card key={index} data={item} id={index} />
        ))}
      </div>
    </div>
  )
}

export default Cards
