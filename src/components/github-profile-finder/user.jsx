export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    name,
    login,
  } = user;

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="user-avatar" />
      </div>
      <div>
        <a href={html_url} target="_blank">
          {name || login}
        </a>
      </div>
    </div>
  );
}
