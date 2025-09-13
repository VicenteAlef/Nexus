import Carousel from "../components/Carousel";
import {
  Card,
  Container,
  ContainerFull,
  GaleryPlans,
  Title,
} from "../components/Commons";

const Home = () => {
  return (
    <>
      <section id="home">
        <Carousel>
          <div className="w-full h-[600px] bg-blue-500 flex items-center justify-center text-white text-5xl">
            Teste 1
          </div>
          <div className="w-full h-[600px] bg-green-500 flex items-center justify-center text-white text-5xl">
            Teste 2
          </div>
          <div className="w-full h-[600px] bg-red-500 flex items-center justify-center text-white text-5xl">
            Teste 3
          </div>
        </Carousel>
      </section>

      <section id="plans">
        <ContainerFull>
          <Title>Conheça nossos Planos</Title>
          <GaleryPlans>
            <Card>
              <div class="text-6xl text-center uppercase font-bold text-blue-700 mb-10">
                500 Mega
              </div>
              <div class="text-center text-2xl text-gray-600 font-bold">
                De R$ 99,90 por:
              </div>
              <div class="text-center text-5xl font-bold text-blue-700">
                R$ 79,90*
              </div>
              <div class="text-[11px] mt-5 text-blue-950">
                *Desconto de pontualidade
              </div>
            </Card>
            <Card>
              <div class="text-6xl text-center uppercase font-bold text-blue-700 mb-5">
                700 Mega
              </div>
              <div class="text-center text-2xl text-gray-600 font-bold">
                De R$ 129,90 por:
              </div>
              <div class="text-center text-4xl font-bold text-blue-700">
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
              <div class="text-6xl text-center uppercase font-bold text-blue-700 mb-5">
                1 Giga
              </div>
              <div class="text-center text-2xl text-gray-600 font-bold">
                De R$ 179,90 por:
              </div>
              <div class="text-center text-4xl font-bold text-blue-700">
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
              <div class="text-4xl text-center uppercase font-bold text-blue-700 mb-2">
                1 Giga Premium
              </div>
              <div class="text-center text-2xl text-gray-600 font-bold">
                De R$ 249,90 por:
              </div>
              <div class="text-center text-4xl font-bold text-blue-700">
                R$ 229,90*
              </div>
              <div class="text-[11px] mt-1 text-blue-950">
                *Desconto de pontualidade
              </div>
              <div class="w-[150px] h-[3px] bg-blue-100 my-2"></div>
              <div class="text-3xl text-blue-950">Beneficios:</div>
              <ul class="text-sm list-disc">
                <li>Roteador Mesh</li>
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
              class="text-2xl text-white uppercase bg-blue-700 hover:bg-blue-600 py-2 px-8 my-5 rounded-full self-center shadow-[0_15px_15px_#00000050] animate-pulse hover:animate-none hover:scale-110 duration-500 ease-in-out hover:shadow-[0_20px_20px_#00000050]"
              target="_blank"
            >
              Contrate Já
            </a>
          </div>
        </ContainerFull>
      </section>
      <section id="plans">
        <Container>
          <h1 className="text-2xl mb-10">Turbine sua conexão</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
        </Container>
      </section>
      <section id="turbo">
        <Container>
          <h1 className="text-2xl mb-10">Turbine sua conexão</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
        </Container>
      </section>
      <section id="app">
        <Container>
          <h1 className="text-2xl mb-10">Baixe o App</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            cupiditate modi animi, veniam ad ducimus placeat quidem cumque
            dolor, mollitia velit vero facere fuga ex. Tempore eos cumque
            adipisci alias itaque optio numquam, labore aut voluptas temporibus
            eius atque ad aliquam quo dicta maxime consequuntur vitae similique
            minus deleniti iure consequatur sit, incidunt ipsum. Consectetur
            autem cum, esse repellendus accusamus sed, distinctio, deleniti iure
            quisquam quia rerum facere vero laudantium quasi. Quia, culpa
            impedit eveniet quaerat asperiores harum eaque officiis aliquid
            delectus quisquam iste alias, dolorem, suscipit quo magnam est
            consequuntur nulla excepturi ipsam pariatur dolore nesciunt. Dolore,
            ab sequi?
          </p>
        </Container>
      </section>
    </>
  );
};

export default Home;
