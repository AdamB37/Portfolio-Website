import { React, SocialIcon, Image, Row } from '../../global_imports'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div className="footer">
          <SocialIcon className="favicon" url="https://github.com/AdamB37" style={{ height: 100, width: 100 }}></SocialIcon>
          <SocialIcon className="favicon" url="https://www.linkedin.com/in/adam-beshir-8653756b" style={{ height: 100, width: 100 }}></SocialIcon>
          <SocialIcon className="favicon" url="https://twitter.com/510native" style={{ height: 100, width: 100 }}></SocialIcon>
      </div>
    )
  }
}
