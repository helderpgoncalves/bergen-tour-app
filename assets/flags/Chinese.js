import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  ClipPath,
  Circle,
  G,
  Path,
} from "react-native-svg"

const Chinese = (props: SvgProps) => (
  <Svg
    data-name="Grupo 497"
    xmlns="http://www.w3.org/2000/svg"
    width={47.969}
    height={47.969}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Circle
          data-name="Elipse 40"
          cx={23.985}
          cy={23.985}
          fill="none"
          r={23.985}
        />
      </ClipPath>
    </Defs>
    <G data-name="Grupo 496" clipPath="url(#a)">
      <G data-name="Grupo 495">
        <Path
          data-name="Ret\xE2ngulo 87"
          fill="#e00000"
          d="M0 0h72.569v47.969H0z"
        />
        <G data-name="Grupo 494" fill="#ecd000">
          <Path
            data-name="Caminho 1379"
            d="m15.208 9.696-1.631-5.007-1.626 5.006H6.687l4.258 3.094-1.626 5.005 4.258-3.094 4.258 3.094-1.626-5.005 4.258-3.094Z"
          />
          <Path
            data-name="Caminho 1380"
            d="m29.82 10.159.244 1.737.824-1.549 1.728.3-1.219-1.262.824-1.549-1.577.769-1.219-1.262.244 1.738-1.577.769Z"
          />
          <Path
            data-name="Caminho 1381"
            d="m25.295 5.539.9 1.5.153-1.748 1.709-.395-1.615-.686.153-1.748-1.151 1.324-1.615-.686.9 1.5-1.151 1.324Z"
          />
          <Path
            data-name="Caminho 1382"
            d="m26.504 19.332-1.095 1.371-1.642-.617.966 1.465-1.095 1.371 1.692-.466.966 1.465.08-1.752 1.691-.466-1.642-.617Z"
          />
          <Path
            data-name="Caminho 1383"
            d="M32.753 15.942 31 16.003l-.6-1.648-.483 1.686-1.753.061 1.454.981-.483 1.686 1.382-1.08 1.454.981-.6-1.648Z"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default Chinese
