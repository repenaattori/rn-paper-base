  
  import { configureFonts, DefaultTheme } from 'react-native-paper';
  import fontConfig from './Fonts';


  const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
    roundness: 4,
    colors:{
        ...DefaultTheme.colors,
        primary: "#6200EE",
        accent: "#03DAC6",
        primaryVariant: "#3700B3",
        accentVariant: "#018766"
    }
  };

  export default theme;
  