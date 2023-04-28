import { memo } from 'react'
import './styles/footer.scss'
import discord from '@@/src/assets/media/discord.svg'
import twitter from '@@/src/assets/media/twitter.svg'
import youtube from '@@/src/assets/media/youtube.svg'
import telegram from '@@/src/assets/media/telegram.svg'

const Footer = memo(() => {
  const supportList = [
    {
      label: 'About us',
      link: '',
    },
    {
      label: 'Terms of Service',
      link: '',
    },
    {
      label: 'Privacy Policy',
      link: '',
    },
    {
      label: 'Help Center',
      link: '',
    },
  ]

  const mediaList = [
    {
      icon: twitter,
      link: '',
    },
    {
      icon: youtube,
      link: '',
    },
    {
      icon: discord,
      link: '',
    },
    {
      icon: telegram,
      link: '',
    },
  ]

  return (
    <div className="fotter">
      <div className="main-layout">
        <div className="footer-t">
          <div>
            <h2>Support</h2>
            <ul>
              {supportList.map((x) => (
                <li key={x.label}>
                  <a href={x.link} target="_blank">
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Social Media</h2>
            <ul>
              {mediaList.map((x) => (
                <li key={x.icon}>
                  <a href={x.link}>
                    <img src={x.icon} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copy-right">@2023 Nulink All rights reserved</p>
      </div>
    </div>
  )
})

export default Footer
