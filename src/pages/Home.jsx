import Carousel from "../components/Carousel";
import FlipCard from "../components/FlipCard";
import { HashLink } from "react-router-hash-link";
import {
  Card,
  Container,
  ContainerFull,
  GaleryPlans,
  Title,
} from "../components/Commons";
import FadeIn from "../components/FadeIn";

const Home = () => {
  return (
    <>
      <section id="home">
        <Carousel>
          <div className="flex items-center justify-center w-full h-[680px] bg-[url('/assets/image1alt.png')] sm:bg-[url('/assets/image1.png')] bg-cover bg-center sm:bg-right  text-white font-bold">
            <div class="flex items-center justify-start sm:justify-center relative sm:right-30 w-[90%] lg:w-full h-full font-bold flex flex-col text-shadow-lg gap-2 uppercase mt-40 sm:mt-0">
              <div class="text-center text-5xl lg:text-8xl">
                Planos a partir de
              </div>
              <HashLink
                smooth
                to="/#plans"
                class="text-4xl lg:text-8xl py-2 px-5 border-5 border-[#0079bb] rounded-full text-[#0079bb] bg-white shadow-xl sm:mt-10 hover:scale-110 duration-500 ease-in-out cursor-pointer"
              >
                R$79,90
              </HashLink>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-[680px] bg-[url('/assets/image2alt.png')] sm:bg-[url('/assets/image2.png')] bg-cover bg-center sm:bg-[position:34%] lg:bg-center h-[680px]  text-white text-6xl font-bold relative">
            <div class="flex flex-col items-center sm:justify-center w-[200px] lg:w-full h-full font-bold lg:m-auto gap-2 mt-50 sm:mt-0">
              <div class="text-6xl lg:text-[90px] uppercase text-shadow-lg absolute sm:right-1 lg:right-[25%] flex flex-col items-center">
                Baixe o App
                <HashLink
                  smooth
                  to="/#app"
                  className="text-blue-600/80 border-4 border-blue-600/10 py-2 px-8 bg-white rounded-full  mt-5 sm:mt-10 shadow-xl hover:scale-110 duration-500 ease-in-out text-2xl flex gap-5 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                  </svg>
                  Baixar
                </HashLink>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-[680px] bg-[url('/assets/image3alt.png')] sm:bg-[url('/assets/image3.png')] bg-cover bg-center  text-white text-6xl font-bold">
            <div className="w-full h-[100%] flex justify-around items-start pt-20 sm:pt-5">
              <img
                src="/assets/hbo.png"
                alt=""
                className="w-[150px] lg:w-[15%] xl:w-[20%] hover:scale-110 duration-500 ease-in-out"
              />
              <img
                src="/assets/watch.png"
                alt=""
                className="w-[150px] lg:w-[15%] xl:w-[20%] hover:scale-110 duration-500 ease-in-out"
              />
            </div>
          </div>
        </Carousel>
      </section>

      <section id="plans">
        <FadeIn>
          <ContainerFull>
            <Title>Conheça nossos Planos</Title>
            <GaleryPlans>
              <Card>
                <div class="text-6xl text-center uppercase font-bold text-[#0081cc] mb-10">
                  500 Mega
                </div>
                <div class="text-center text-2xl text-gray-600 font-bold">
                  De R$ 99,90 por:
                </div>
                <div class="text-center text-5xl font-bold text-[#0079bb]">
                  R$ 79,90*
                </div>
                <div class="text-[11px] mt-5 text-blue-950">
                  *Desconto de pontualidade
                </div>
              </Card>
              <Card>
                <div class="text-6xl text-center uppercase font-bold text-[#0081cc] mb-5">
                  700 Mega
                </div>
                <div class="text-center text-2xl text-gray-600 font-bold">
                  De R$ 129,90 por:
                </div>
                <div class="text-center text-4xl font-bold text-[#0079bb]">
                  R$ 109,90*
                </div>
                <div class="text-[11px] mt-5 text-blue-950">
                  *Desconto de pontualidade
                </div>
                <div class="w-[150px] h-[3px] bg-blue-100 my-3"></div>
                <div class="text-2xl text-blue-950">Beneficios:</div>
                <ul class="text-sm list-disc">
                  <li>Watch TV</li>
                  <li>HBO Max</li>
                  <li>Wifi 6</li>
                </ul>
              </Card>
              <Card>
                <div class="text-6xl text-center uppercase font-bold text-[#0081cc] mb-5">
                  1 Giga
                </div>
                <div class="text-center text-2xl text-gray-600 font-bold">
                  De R$ 179,90 por:
                </div>
                <div class="text-center text-4xl font-bold text-[#0079bb]">
                  R$ 159,90*
                </div>
                <div class="text-[11px] mt-5 text-blue-950">
                  *Desconto de pontualidade
                </div>
                <div class="w-[150px] h-[3px] bg-blue-100 my-5"></div>
                <div class="text-3xl text-blue-950">Beneficios:</div>
                <ul class="text-sm list-disc">
                  <li>Roteador Mesh</li>
                  <li>Watch TV</li>
                  <li>HBO MAX</li>
                  <li>Wifi 6</li>
                </ul>
              </Card>
              <Card>
                <div class="text-4xl text-center uppercase font-bold text-[#0081cc] mb-2">
                  1 Giga Premium
                </div>
                <div class="text-center text-2xl text-gray-600 font-bold">
                  De R$ 249,90 por:
                </div>
                <div class="text-center text-4xl font-bold text-[#0079bb]">
                  R$ 229,90*
                </div>
                <div class="text-[11px] mt-1 text-blue-950">
                  *Desconto de pontualidade
                </div>
                <div class="w-[150px] h-[3px] bg-blue-100 my-2"></div>
                <div class="text-3xl text-blue-950">Beneficios:</div>
                <ul class="text-sm list-disc">
                  <li>Roteador Mesh</li>
                  <li>Font Nobreak</li>
                  <li>Ping Optimizer</li>
                  <li>YouTube Premium</li>
                  <li>HBO MAX</li>
                  <li>Watch TV</li>
                  <li>Wifi 6</li>
                </ul>
              </Card>
            </GaleryPlans>
            <div className="w-full flex justify-center ">
              <a
                href="https://wa.me/5561999999999?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+planos+de+internet+da+Nexus+por+favor."
                class="text-2xl text-white uppercase bg-[#0081cc] hover:bg-[#0079bb] py-2 px-8 my-5 rounded-full self-center shadow-[0_15px_15px_#00000050] animate-pulse hover:animate-none hover:scale-110 duration-500 ease-in-out hover:shadow-[0_20px_20px_#00000050]"
                target="_blank"
              >
                Contrate Já
              </a>
            </div>
          </ContainerFull>
        </FadeIn>
      </section>

      <section id="turbo">
        <FadeIn>
          <Title>Turbine sua conexão!</Title>
          <div className="w-full grid lg:grid-cols-2 md:px-[15%] pt-10 pb-20">
            <FlipCard
              title={"Amplie sua rede com Wifi Mesh"}
              face={
                <div className="flex flex-col items-center justify-center gap-10">
                  <img src="./assets/F6600P-1.png" alt="" />
                </div>
              }
              back={
                <div className="flex flex-col text-white sm:px-20 gap-2">
                  <h3 class=" text-2xl md:text-3xl font-bold mb-2">
                    Descubra os Benefícios da Rede Wi-Fi Mesh
                  </h3>
                  <p>
                    Você já se frustrou com o sinal fraco de internet em certos
                    cômodos da sua casa? Com a tecnologia{" "}
                    <strong>Wi-Fi Mesh</strong>, esse problema fica no passado!
                  </p>
                  <p>
                    Diferente dos roteadores tradicionais, que distribuem o
                    sinal a partir de um único ponto, o sistema Mesh utiliza
                    vários dispositivos interligados que trabalham juntos para
                    espalhar o sinal por todos os ambientes. Isso garante
                    cobertura completa, conexão estável e velocidade consistente
                    em todos os cantos da sua casa ou empresa.
                  </p>
                  <div className="w-full flex justify-center">
                    <a
                      href="https://wa.me/5561999999999?text=Ol%C3%A1%2C+gostaria+de+contratar+o+roteador+Mesh."
                      target="_blank"
                      className="mt-5 px-4 py-2 bg-blue-400 text-white font-bold rounded-xl hover:bg-blue-300 transition cursor-pointer"
                    >
                      Contratar Mesh
                    </a>
                  </div>
                </div>
              }
            />
            <FlipCard
              title={"Amplie sua rede com Wifi Mesh"}
              face={
                <div className="h-full flex flex-col items-center justify-center gap-10">
                  <img
                    src="./assets/nobreak.png"
                    alt=""
                    className="w-50 sm:w-85"
                  />
                </div>
              }
              back={
                <div className="flex flex-col text-white sm:px-20 gap-2">
                  <h3 class=" text-2xl md:text-3xl font-bold mb-2">
                    Tenha conexão mesmo sem energia
                  </h3>
                  <p>
                    No mundo de hoje, sua casa e seu trabalho dependem de uma
                    conexão constante. Então, por que deixá-la vulnerável ao
                    primeiro sinal de instabilidade elétrica? Eleve o nível da
                    sua infraestrutura doméstica com a{" "}
                    <strong>fonte nobreak</strong>.
                  </p>
                  <p>
                    Esqueça os nobreaks grandes e barulhentos. Este é um sistema
                    de energia ininterrupta (UPS) em miniatura, projetado
                    especificamente para manter o coração da sua rede — seu
                    roteador e modem — pulsando durante quedas de energia.
                    Garanta um ecossistema digital resiliente, onde sua conexão
                    não é um ponto de falha, mas sim uma certeza.
                  </p>
                  <div className="w-full flex justify-center">
                    <a
                      href="https://wa.me/5561999999999?text=Ol%C3%A1%2C+gostaria+de+contratar+a+fonte+Nobreak."
                      target="_blank"
                      className="mt-5 px-4 py-2 bg-blue-400 text-white font-bold rounded-xl hover:bg-blue-300 transition cursor-pointer"
                    >
                      Contratar Fonte Nobreak
                    </a>
                  </div>
                </div>
              }
            />
          </div>
        </FadeIn>
      </section>
      <section id="app">
        <FadeIn>
          <div class="pt-30 px-5 md:px-[8%] lg:px-[15%] bg-[#0079bb] flex flex-col items-center grid grid-cols-1 md:grid-cols-2 text-white">
            <div class="w-full flex flex-col items-center sm:items-start">
              <div className="flex flex-col w-[280px] sm:w-full">
                <h2 class="text-5xl lg:text-7xl text-white font-bold  mb-10 md:pb-[20px]">
                  Baixe o App
                </h2>
                <div>
                  <h3 class="text-2xl lg:text-4xl font-bold mb-5 self-center">
                    Tudo na palma da mão
                  </h3>
                  <ul class="list-disc ml-5 lg:ml-10 md:text-2xl">
                    <li>Solicite a segunda via de boletos</li>
                    <li>Confira histórico de pagamentos</li>
                    <li>Solicite atendimentos</li>
                    <li>Assine documentos</li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-wrap py-10 lg:py-20 gap-5 justify-center md:justify-start">
                <a
                  target="_blank"
                  href="https://play.google.com/store"
                  class="py-2 px-5 bg-white rounded-full text-black flex items-center gap-2 text-xl w-[180px] hover:scale-110 duration-500 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-google-play"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                  </svg>
                  Play Store
                </a>
                <a
                  target="_blank"
                  href="https://apps.apple.com/br"
                  class="py-2 px-5 bg-white rounded-full text-black flex items-center gap-2 text-xl w-[180px] hover:scale-110 duration-500 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-apple"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  </svg>
                  Apple Store
                </a>
              </div>
            </div>
            <div class="flex w-full items-center justify-center">
              <img
                src="assets/Adobe Express - file (1).png"
                alt=""
                class="w-full"
              />
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default Home;
