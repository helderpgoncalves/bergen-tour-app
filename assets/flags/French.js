import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  ClipPath,
  Circle,
  G,
  Path,
} from "react-native-svg"

const French = (props: SvgProps) => (
  <Svg
    data-name="Grupo 504"
    xmlns="http://www.w3.org/2000/svg"
    width={48.496}
    height={48.496}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Circle
          data-name="Elipse 42"
          cx={24.248}
          cy={24.248}
          r={24.248}
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G data-name="Grupo 503" clipPath="url(#a)">
      <G data-name="Grupo 502">
        <Path
          data-name="Ret\xE2ngulo 89"
          fill="#e80c20"
          d="M33.378.172H60.24v47.755H33.378z"
        />
        <Path
          data-name="Ret\xE2ngulo 90"
          fill="#fff"
          d="M15.47.172h17.908v47.755H15.47z"
        />
        <Path
          data-name="Ret\xE2ngulo 91"
          fill="#002a94"
          d="M-11.392.172H15.47v47.755h-26.862z"
        />
      </G>
    </G>
  </Svg>
)

export default French
