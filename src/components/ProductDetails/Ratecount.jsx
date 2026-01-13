
 export const Ratecount = ({ rateCount }) => {
  const totalStars = 5;

  return (
    <div className="rating-stars" style={{color:"orangered"}}>
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>
          {index < rateCount ? "★" : ""}
        </span>
      ))}
    </div>
  );
};

