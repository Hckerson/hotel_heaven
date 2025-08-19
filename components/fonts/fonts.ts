import { Roboto_Flex } from "next/font/google";
import localFont from 'next/font/local'

const flex = Roboto_Flex({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const clash = localFont({
  src : './local/ClashDisplay-Bold.otf'
})


export {flex, clash}