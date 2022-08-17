const Controls = ({ addGoodReview, addNeutralReview, addBadReview }) => (
  <div>
    <button className="good" type="button" onClick={addGoodReview}>
      Good
    </button>
    <button className="neutral" type="button" onClick={addNeutralReview}>
      Neutral
    </button>
    <button className="bad" type="button" onClick={addBadReview}>
      Bad
    </button>
  </div>
);
export default Controls;
