const MyNav = function (props) {
  return (
    <nav class="navbar navbar-expand-lg bg-dark ">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">
              {props.home}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              {props.about}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              {props.browse}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default MyNav;
