// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import google from "@/assets/img/logos/google-logo.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Alcance mais clientes</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <main className="container-fluid vh-100 d-flex">
        <div className="row w-100">
          {/* Lado esquerdo (azul) */}
          <div
            className=" col-md-6 order-1 order-md-1 d-flex flex-column align-items-center justify-content-center"
            style={{ backgroundColor: '#007BFF', color: '#FFFFFF' }}
          >
            <div className="text-center" style={{ maxWidth: '600px', width: '100%' }}>
              <h1 className="fw-bold mb-4 display-4" style={{ color: '#FFFFFF'}}>
                Alcance mais clientes e aumente seus lucros.
              </h1>
              
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jxGl0nKmT-E?si=ij7MJU4Aad-LA_pJ&amp;controls=0"
                 title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 ></iframe>
             
              <p style={{ color: '#FFFFFF'}}>
                Somos Especialistas em desenvolvimento de tecnologia para aceleração de Negócios.
              </p>
            </div>
          </div>

          {/* Lado direito (branco) */}
          <div
            className="col-md-6 order-2 order-md-2 d-flex flex-column align-items-center justify-content-center"
            style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
          >
            <div className="text-center" style={{ maxWidth: '400px', width: '100%' }}>
              <h3 className="fw-bold">Consultoria Gratuita</h3>
              <p className="mt-3">
                Inscreva-se e obtenha uma análise personalizada para acelerar o crescimento do seu
                negócio.
              </p>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="text-center me-3">
                  <div className="fw-bold display-6">06</div>
                  <small>VAGAS DISPONÍVEIS</small>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center mb-3">
                <button
                  className="btn btn-primary text-white mb-2"
                  style={{ maxWidth: '300px', width: '100%' }}
                >
                  Solicitar Análise Gratuita
                </button>
                <button
                  className="btn btn-outline-primary"
                  style={{ maxWidth: '300px', width: '100%' }}
                >
                  Chamar no WhatsApp
                </button>
              </div>
              <div className="text-center mt-3">
                <small>Certificado pelo</small>{' '}
                <Image
                  src={google}
                  alt="Google"
                  style={{ width: '70px', verticalAlign: 'middle' }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
