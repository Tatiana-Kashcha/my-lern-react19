import "./App.css";

function App() {
  return (
    <>
      {/* Навігація */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            MyBootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Головна
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Про нас
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Контакти
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Заголовок */}
      <header className="bg-primary text-white text-center py-5">
        <h1>Привіт з React + Bootstrap 🎉</h1>
        <p className="lead">Це адаптивний інтерфейс</p>
        <button
          className="btn btn-light mt-3"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Відкрити модалку
        </button>
      </header>

      {/* Картки */}
      <main className="container my-5">
        <div className="row g-4">
          {["1", "2", "3"].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-info">
                <div className="card-body">
                  <h5 className="card-title">Картка {item}</h5>
                  <p className="card-text">
                    Це приклад картки в React з Bootstrap.
                  </p>
                  <button className="btn btn-info">Go</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Модальне вікно */}
      <div
        className="modal fade"
        id="myModal"
        // tabIndex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
                React Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрити"
              ></button>
            </div>
            <div className="modal-body">
              Це модальне вікно в React-компоненті.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрити
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
