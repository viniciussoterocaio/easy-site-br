import logo from './imgs/logo192.png'
import TextoAnimado from './animações/TextoAnimado'
function InitialPage() {
  return (
    <div id= "initial-page">
      <div id= "initial-page-main" >
      <img src={logo} alt="logo da Easy Sites Brasil" />
      <TextoAnimado/>
      </div>
    </div>
  );
}

export default InitialPage;