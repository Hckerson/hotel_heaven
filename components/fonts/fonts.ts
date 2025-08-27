import { Roboto_Flex } from "next/font/google";
import localFont from 'next/font/local'

const flex = Roboto_Flex({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const clash = localFont({
  src : './local/ClashDisplay-Bold.otf'
})

const roboto_flex = localFont({
  src : './local/Roboto_Flex/roboto_flex.otf'
})



export {flex, clash, roboto_flex}