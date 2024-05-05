import logo from '../imgs/logo192.png'
import TextoAnimado from '../animações/TextoAnimado'
function InitialPage() {
  return (
    <div id= "initial-page">
      <div id= "initial-page-marca" >
        <img id = "initial-page-logo"src={logo} alt="logo da Easy Sites Brasil" />
        <TextoAnimado/>
      </div>
      <div id = "initial-page-content">
        <div id = "initial-page-main">
          <h1 id = "main-text-home" className='h1-site'>Crie seu site aqui!</h1>
          <h2 id = "main-text-home-second" className='h2-site' >Bem vindo</h2>
          <button class = 'button_slide slide_right'>Quero um site</button>
        </div>
        <div id = "imgs-animations">
        </div>
      </div>
    </div>
  );
}

export default InitialPage;