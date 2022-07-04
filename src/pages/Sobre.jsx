import Footer from "../components/Footer";

export default function Sobre() {
  return (
    <div>
      <div class="card">
        <div class="card-header">
          <h1 style={{ fontSize: "35px" }}>
            A S.O.S. Tech se preocupa com a visão, missão e os valores!
          </h1>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              O homem de muitos amigos deve mostrar-se amigável, mas há um amigo
              mais chegado do que um irmão.
            </p>
            <footer class="blockquote-footer">Rei Salomão</footer>
          </blockquote>
        </div>
      </div>
      {/* <hr /> */}
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <ul>
          <li className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <h1 className="display-4 fw-bold">Visão</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Ter bons resultados e clientes satisfeitos, entregamos sempre o
                pedido com pontualidade, orientando suas ações e aspirações para
                o futuro ser realista com o cliente.
              </p>
            </div>
          </li>
          <li className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <h1 className="display-4 fw-bold">Missão</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Visto a mentalidade empreendedora da nova geração e o boost de
                criação de novas empresas, nossa meta é fazer parte desse
                crescimento e ajudar novas empresas a crescerem no mercado e
                trazer segurança para as que já estão sólidas.
              </p>
            </div>
          </li>
          <li className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <h1 className="display-4 fw-bold">Valores</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Pontualidade, praticidade, inclusão e respeito.
              </p>
            </div>
          </li>
          <li className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <h1 className="display-4 fw-bold">Métodos</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Uma empresa praticante de metodologia ágil, fragmentando o
                processo com a equipe no objetivo de entregar as soluções o mais
                rápido e eficiente possível.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
