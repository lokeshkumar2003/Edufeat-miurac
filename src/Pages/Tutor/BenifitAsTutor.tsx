import React from 'react'
import TutorBenifitCard from '../../Components/Cards/TutorBenifitCard'
import Content from '../../Components/Layouts/Content'
import freedom from '../../Assets/benifitfreedom.svg'
import knowledge from '../../Assets/benifitknowledge.svg'
import wallet from '../../Assets/benifitwallet.svg'
export default function BenifitAsTutor() {
  const cards = [
    {
      title: 'Freedom to Work',
      description:
        'Work according to your schedule at your own convenience. All you need is a stable internet connection to become an online tutor with Edufeat. ',
      img: freedom,
    },
    {
      title: 'Knowledge',
      description:
        'Solve new questions everyday and expand your knowledge with international academic exposure. ',
      img: knowledge,
    },
    {
      title: 'Weekly Payments',
      description:
        'No need to wait till the end of the month to get paid. We pay our tutors weekly. ',
      img: wallet,
    },
  ]
  return (
    <div className='bg-lightbg py-16'>
      <Content>
        <div className=''>
          <div className='text-primary heading text-center mb-10'>
            Benefits as a Tutor
          </div>
          <div className='flex gap-10 flex-wrap lg:flex-nowrap justify-center  '>
            {cards.map((card, i) => (
              <TutorBenifitCard
                title={card.title}
                img={card.img}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </Content>
    </div>
  )
}
