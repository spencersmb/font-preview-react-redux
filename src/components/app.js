import reviews from '../Reviews/const'
// eslint-disable-line react/prefer-stateless-function
export default class Reviews extends React.Component { 

  static propTypes = {
    match: React.PropTypes.node.isRequired,
  }

  render() {
    const revs = reviews.map(review => {

      return (
          <div key={review.id}>
            {review.items
            .filter(item => item.id === this.props.match.params.reviewId)
            .map(item =>
              <div className="cell">
                <div key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div>{item.text}</div>
                </div>
              </div>
            )}
          </div>
      );

    })

return (
  <div>
    {this.props.match.params.reviewId}
    { revs }
  </div>
)
 }
}