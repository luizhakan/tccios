import avatar from "../assets/avatar.png";
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <div className="row g-3">
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="nome@exemplo.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefone">Telefone</label>
          <br />
          <input
            type="tel"
            className="form-control"
            name="telefone"
            id="telefone"
            placeholder="Telefone"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Solução
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Digite aqui o seu problema"
          ></textarea>
        </div>
        <div>
          <p>Como prefere o nosso contato?</p>
          <label for="email">
            <input type="radio" name="contato" id="email" required />
            E-mail
          </label>

          <label for="telefone">
            <input type="radio" name="contato" id="telefone" required />
            Telefone
          </label>

          <label for="whatsapp">
            <input type="radio" name="contato" id="whatsapp" required />
            Whatsapp
          </label><br />

          <label class="checkbox">
            <input type="checkbox"></input>Gostaria de receber nossas novidades
            por email?
          </label>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Confirmar contato
          </button>
        </div>
      </form>
    </div>
  );
}
