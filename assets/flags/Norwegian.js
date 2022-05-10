import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  ClipPath,
  Ellipse,
  G,
  Path,
} from "react-native-svg"

const Norwegian = (props: SvgProps) => (
  <Svg
    data-name="Grupo 501"
    xmlns="http://www.w3.org/2000/svg"
    width={47.701}
    height={48.496}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Ellipse
          data-name="Elipse 41"
          cx={23.85}
          cy={24.248}
          rx={23.85}
          ry={24.248}
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G data-name="Grupo 500" clipPath="url(#a)">
      <G data-name="Grupo 499">
        <Path
          data-name="Ret\xE2ngulo 88"
          fill="#ea1e20"
          d="M0 0h65.191v48.496H0z"
        />
        <G data-name="Grupo 498">
          <Path
            data-name="Caminho 1384"
            d="M65.529 18.13H29.634V.182H17.669V18.13H-.278v11.965h17.947v17.948h11.965V30.095h35.895Z"
            fill="#fff"
          />
          <Path
            data-name="Caminho 1385"
            d="M65.529 21.121H26.643V.182h-5.982v20.939H-.278v5.982h20.939v20.939h5.982V27.103h38.886Z"
            fill="#002868"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default Norwegian
