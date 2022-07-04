import avatar from "../assets/avatar.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img className="img-avatar" src={avatar} alt="Avatar SOS TECH" />
      <h1 className="display-5 fw-bold">S.O.S. TECH</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Bem vindo a melhor empresa de soluções tecnológicas do Brasil!
        </p>
      </div>
    </div>
  );
}
