import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  ClipPath,
  Circle,
  G,
  Path,
} from "react-native-svg"

const Germany = (props: SvgProps) => (
<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48.496}
    height={48.496}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Circle
          data-name="Elipse 39"
          cx={24.248}
          cy={24.248}
          r={24.248}
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G data-name="Grupo 492" clipPath="url(#a)">
      <G data-name="Grupo 491">
        <Path
          data-name="Ret\xE2ngulo 84"
          fill="#fc0"
          d="M-16.071 32.142h80.356v16.071h-80.356z"
        />
        <Path
          data-name="Ret\xE2ngulo 85"
          fill="red"
          d="M-16.071 16.071h80.356v16.071h-80.356z"
        />
        <Path
          data-name="Ret\xE2ngulo 86"
          d="M-16.071 0h80.356v16.071h-80.356z"
        />
      </G>
    </G>
  </Svg>
)

export default Germany
