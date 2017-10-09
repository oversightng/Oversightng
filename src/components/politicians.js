import React from 'react';
import Slider from 'react-slick';
import ProfileCard from './profilecard';

const settings = {
  className: 'center',
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 5,
  swipeToSlide: true,
  responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }],
  afterChange: function (index) {
    console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
  }
};

class Politicians extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  };

  render() {
    const politicians = this.props.politicians.map((politician, key) => {
      return (
        <div key={politician._id}>
          <ProfileCard
            name={politician.name}
            avatar={politician.avatar}
            post={politician.current_post.title}
            state={politician.state}
            dob={politician.dob}
            party={politician.party}
            loggedin={this.props.loggedin}
          />
        </div>
      )
    });

    return (
      <div className="col-md-12 politicians-container">
        {this.props.politicians.length &&
          <Slider {...settings}>
              {politicians}
          </Slider>
        }
      </div>
    );
  }
}

export default Politicians;
