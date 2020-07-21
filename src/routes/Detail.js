import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { state } = this.props.location;

    console.log(state);

    if (state) {
      return (
        <div className="detail__container">
          <img className="detail__image" src={state.poster} alt={state.title} />
          <div className="detail__data">
            <div className="detail__title">{state.title}</div>
            <div className="detail__genres">[{state.genres}]</div>
            <div className="detail__year">{state.year}</div>
            <div className="detail__summary">{state.summary}</div>
            <div>(평점:{state.rating})</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
