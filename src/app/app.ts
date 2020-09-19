// Se importan las clases del controlador que se va a necesitar
import { ExamplePageController } from './pages/Example/ExamplePageController';
import { HomePageController } from './pages/Home/HomePageController';
import { PortfolioPageController } from './pages/Portfolio/PortfolioPageController';
class App {
  // Arreglo de controllers
  mainPages = [
    // HomePageController
    // ExamplePageController
    PortfolioPageController
  ];
  // Arreglo vacío donde añadiremos controllers
  loaded: any = []
  // El render() reccorrerá los controllers añadidos en el mainPages para agregar la página correspondiente junto a sus componentes
  render() {
    // Hace llamado al método component()
    const component = this.component();
    // Recorre los controllers para crear un pageController, luego lo añade al arreglo loaded, después se hace llamado al método getView() que está dentro del portfolioPageController, finalmente añade al html la página
    this.mainPages.forEach(pageController => {
      const controller = new pageController();
      this.loaded.push(controller);
      const [elId, element] = controller.getView();
      component.appendChild(this.createPage(elId, element));
    })
    // Se añade al body del html el componente
    document.body.append(component);
    // Cuando el documento esté cargado entonces se recorrerá el arreglo loaded para revisar si se está haciendo llamado del método start(), para así entonces llamarlo desde aquí
    document.body.onload = () => {
      this.loaded.forEach((controller: any) => {
        if ('start' in controller.component) {
          controller.component.start();
        }
      })
    }
  }
  // Método que recibe un id y un element, este hará la creación del contenedor secundario y dentro de este contendrá el fragmento de documento que se encuentra en el html de nuestra página, finalmente lo añadirá al html y retornará la página
  createPage(id: string, element: DocumentFragment) {
    const page = document.createElement("div");
      page.id = id;
    page.appendChild(element);
    return page;
  }
  // Método que hace creación del contenedor principal llamado app y lo retornará
  component() {
    const element = document.createElement('div');
    element.id = "app";
    return element;
  }
}
// Se hace llamado de la clase App() para poder renderizar la página
const app = new App();
app.render();



