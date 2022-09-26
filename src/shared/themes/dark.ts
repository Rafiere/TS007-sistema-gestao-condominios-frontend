import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        mode: "dark", //Com isso, o tema entende que, em algumas partes, ele terá que utilizar um texto que faça contraste com as cores escuras, ou seja, as cores dos textos serão claras quando esse tema estiver ativado.
        primary: {
            //A cor primária é utilizada em coisas com mais destaques.
            main: yellow[700],
            dark: yellow[800], //Quando passamos o mouse por cima do componente, ele fica um pouco mais escuro, e é essa cor que será aplicada quando o componente escurecer.
            light: yellow[500],
            contrastText: "#FFFFFF", //Essa cor serve para fazer contraste com a cor primária, ou seja, se formos ler um texto, esse texto deverá estar em contraste com a cor de fundo, para permitir a leitura do texto sem muito esforço. Ela fará contraste com a cor "main".
        },
        secondary: {
            //Essas cores são utilizadas em materiais com um menor destaque.
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: "#FFFFFF",
        },
        background: {
            default: "#303134", //O "default" será a cor de fundo do site.
            paper: "#202124", //O "paper" será a cor do fundo do card.
        },
    },
    typography: {
        //Aqui, teremos configurações específicas para os componentes de tipografia.
        allVariants: {
            //As tipografias serão da cor branca quando esse tema for ativado.
            color: "white",
        },
    },
});
