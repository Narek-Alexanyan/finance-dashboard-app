import Flex from "../ui/Flex";
import Typography from "../ui/Typography";

const Logo = () => {
  return (
    <Flex align="center" gap="2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 182 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="31.6912"
          cy="31.6912"
          r="31.6912"
          transform="matrix(0.965926 0.258819 0.509492 -0.860475 0 114.657)"
          fill="#00D4E6"
        />
        <circle
          cx="23.5348"
          cy="23.5348"
          r="23.5348"
          transform="matrix(0.258819 0.965926 0.99994 0.0109953 25.3369 56.7402)"
          fill="#FFC300"
        />
        <circle
          cx="27.9812"
          cy="27.9812"
          r="27.9812"
          transform="matrix(0.866025 -0.5 -0.248183 -0.968713 42.604 144)"
          fill="#8759F2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.5558 76.1834C69.3503 71.4541 60.7387 70.9565 52.3529 75.7981C46.1684 79.3687 41.189 85.2184 38 91.9555C43.864 98.2001 52.2146 102.374 60.4581 102.465C73.4552 102.608 81.2644 92.5457 77.9003 79.9907C77.8028 79.6268 77.697 79.2649 77.5831 78.905C76.9869 77.9551 76.3103 77.0458 75.5558 76.1834Z"
          fill="#FF3E80"
        />
        <g style={{ mixBlendMode: "multiply" }}>
          <circle
            cx="18.6066"
            cy="18.6066"
            r="18.6066"
            transform="matrix(1 0 0.269424 -0.963022 134 35.8372)"
            fill="#FF3E80"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }}>
          <circle
            cx="13.2543"
            cy="13.2543"
            r="13.2543"
            transform="matrix(1 0 0.269424 -0.963022 79.3882 48.4861)"
            fill="#00D4E6"
          />
        </g>
      </svg>
      <Typography variant="h4">Finance.io</Typography>
    </Flex>
  );
};

export default Logo;
