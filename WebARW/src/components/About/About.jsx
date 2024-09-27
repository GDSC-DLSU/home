import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon"/>
      </div>
      <div className="about-right">
        <h3>ABOUT GDSC DLSU</h3>
        <h2>Learning, building, and growing together as tech pioneers</h2>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus dignissim enim congue nisl morbi, venenatis velit auctor. Morbi facilisi ipsum quam; torquent ligula consectetur. Luctus maximus vitae venenatis ornare; eget ultricies mollis. Netus eget tellus penatibus montes purus. Diam id accumsan; primis viverra at nostra.</p>
        <p>Rutrum vestibulum in vivamus ullamcorper hac amet consequat; cras praesent. Suspendisse habitant sollicitudin pharetra morbi tellus volutpat suspendisse natoque. Proin libero amet nullam ad justo. Potenti tempus fames fringilla a, suscipit dignissim maecenas turpis. Fusce neque class, pulvinar convallis sed elementum. Fames ridiculus cras himenaeos penatibus mi magnis himenaeos duis luctus. Justo primis ac felis laoreet magna magna ligula rutrum sem. Odio proin dapibus neque; dapibus sagittis a venenatis.</p>
      </div>
    </div>
  )
}

export default About