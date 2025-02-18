
import { render,screen} from "@testing-library/react"
import Billetterie from "../Pages/Billetterie.js";
import '@testing-library/jest-dom';

describe("<Billetterie />", () => {
    test("<Affichage des vignette />", () =>{
      // Génération DOM virtuel
      render(<Billetterie />);
      // Assertions
      expect(screen.getByText('S')).toBeInTheDocument();
      expect(screen.getByText('V')).toBeInTheDocument();
      expect(screen.getByText('D')).toBeInTheDocument();
      expect(screen.getByText('VS')).toBeInTheDocument();
      expect(screen.getByText('SD')).toBeInTheDocument();
      expect(screen.getByText('VSD')).toBeInTheDocument();
    })
  })

