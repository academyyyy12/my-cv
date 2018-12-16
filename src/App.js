import React, { Component } from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificate from './components/Certificate'
import Skills from './components/Skills'

class App extends Component {
  render() {
    const person = {
      avatar:
        'https://avatars2.githubusercontent.com/u/28197080?s=400&u=b72f8e7d02d0c33981bb5caea711c068ad70a5d8&v=4',
      name: 'Martin Jham',
      profession: 'FrontEnd - Backend Developer - Game Developer',
      bio:
        '❤ Member Developer Circles - Jakarta, Javascript Lover, Authors & activists of innovation. Better known as The MartinJham Developer.',
      address: 'Jl. Raya Cangkrang, Cikarawang, Bogor, Jawa Barat RT/RW 01/01',
      social: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/martindiscartes.lnxcode'
        },
        { name: 'twitter', url: 'https://twitter.com/Martinjham7' },
        { name: 'github', url: 'https://github.com/academyyyy12' },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/muhammad-r-sthi0721511b/'
        }
      ],
      experience: [
        {
          jobTitle: 'FrontEnd & DevOps - Praktek Kerja Lapang',
          company: 'INK & CANVAS',
          startDate: 'Nov 2016',
          endDate: 'Okt 2018',
          jobDescription:
            'working on a one-year project with 2 billion salaray, using angular.js, node.js. | azure .Net'
        },
        {
          jobTitle: 'Programmer',
          company: 'Ginvo Studio',
          startDate: 'September 2016',
          endDate: '-',
          jobDescription:
            'Work on several small projects, and at the same time learn.'
        }
      ],
      education: [
        {
          degree: 'SDN CARANG PULANG 01',
          institution: '-',
          startDate: '2006',
          endDate: '2012',
          description: ''
        },
        {
          degree: 'SMPN 1 DRAMAGA',
          institution: '-',
          startDate: '2012',
          endDate: '2015',
          description: ''
        },
        {
          degree: 'SMKN 1 CIOMAS',
          institution: '-',
          startDate: '2015',
          endDate: '2019',
          description: ''
        }
      ],
      certificate: [
        {
          name:
            'Learn How To Improve Your Testing with Artificial Intelligence | An Expert Roundup ',
          institution: 'Bar Kofman',
          date: 'Sep 25, 2018',
          description: 'Improve Testing Artificial Intelligence'
        },
        {
          name: 'Digital Innovation Contest Kota Bogor - Champion number 1',
          institution: 'Kasgoro',
          date: 'Agus 2018',
          description:
            'High school / vocational level competition in Bogor city.'
        },
        {
          name: 'Git: Become an Expert in Git & GitHub in 4 Hours',
          institution: 'Udemy Course',
          date: '2018',
          description: 'Udemy Course'
        },
        {
          name: 'Google I/O Extended 2017 Depok',
          institution: 'Google I/O',
          date: '2017',
          description: ''
        },
        {
          name: 'Game Development HTML 5',
          institution: 'dicoding',
          date: '26 Nov, 2017',
          description: ''
        },
        {
          name: 'LKS ASEAN - 2018 SEACC',
          institution: 'SEACC',
          date: '11 Aprl, 2018',
          description: ''
        }
      ],
      skills: [
        { name: 'Angular', percentage: '60%' },
        { name: 'SCSS', percentage: '90%' },
        { name: 'JavaScript', percentage: '90%' },
        { name: 'PHP', percentage: '35%' },
        { name: 'SWIFT', percentage: '30%' },
        { name: 'React', percentage: '80%' }
      ]
    }

    return (
      <header>
        <div className="wrapper">
          <div className="sidebar">
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social}
            />
          </div>

          <div className="content-wrapper">
            <div className="content">
              <Experience experience={person.experience} />
              <Education education={person.education} />
              <Certificate certificate={person.certificate} />
              <Skills skills={person.skills} />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default App
