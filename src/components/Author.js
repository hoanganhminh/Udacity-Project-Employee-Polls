const Author = ({ name, date, avatar }) => {
  return (
    <div class="card border-0">
      <div class="d-flex align-items-center">
        <img src={avatar} alt={`${name.toLowerCase()} avatar`} width="35" height="35" class="mr-2" />
        <div>
          <p class="font-weight-bold mb-0">{name}</p>
          <p class="mb-0">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
