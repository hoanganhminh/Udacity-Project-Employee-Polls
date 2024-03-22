const Author = ({ name, date, avatar }) => {
  return (
    <div className="card-footer text-muted">
      <p>{name}</p>
      <img src={avatar} alt={`${name.toLowerCase()} avatar`} width="35" height="35" />
      <p>{date}</p>
    </div>
  );
};

export default Author;
