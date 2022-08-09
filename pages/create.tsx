import { Button } from "@mui/material";
import Head from "next/head";
import router, { useRouter } from 'next/router'
import AddIcon from "@mui/icons-material/Add";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Home() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <Head>
        <title>Create a vidcall</title>
        <meta name="description" content="Create a meet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <svg
        id="SvgjsSvg1001"
        width="600"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="w-full h-full absolute -left-[10%] z-[0] "
        viewBox="0 0 600 600"
      >
        <title id="SvgjsTitle2795">
          x=min((sqrt(x*x + y*y)+sqrt(x*x + y*y)),sin((y+sqrt(x*x +
          y*y))))|y=(y+cos(x))|dTest=0.2|sd=0.6|sm=0.9|ts=0.1 | generated with
          FlowLines
        </title>
        <g id="SvgjsG2796">
          <polyline
            id="SvgjsPolyline2797"
            points="162.38,256.11 158.73,255 155.17,256.39 155.9,260.05 159.3,261.78 163.1,261.41 165.86,258.78 165.69,254.99 163.43,251.91 153.07,247.18 141.61,246.25 126.35,247.87 77.54,258.25 54.59,257.98 43.63,254.55 37.03,250.65 31.44,245.41 25.58,235.55 23.44,228.19 22.46,216.73 25.85,194 33.14,172.15 60.05,108.5 67.49,78.76 68.38,63.43 67.22,48.13 57.41,3.12"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2798"
            points="178.98,257.31 182.28,246.45 181.07,238.9 177.9,231.92 165.51,217.33 130.68,187.22 121.93,174.66 118.39,163.74 117.8,152.26 120.39,137.14 141.9,79.63 148.35,53.57 149.34,30.59 144.6,0.28"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2799"
            points="136.72,258.65 131.48,264.24 126.81,274.69 125.98,282.31 127.67,297.53 136.27,318.85 173.11,381.78 182.16,402.96 189.18,424.9 195.93,454.86 201.52,492.84 209.16,596.22"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2800"
            points="156.57,235.12 142.56,228.86 109.85,217.74 96.02,211.07 84.13,201.47 79.85,195.11 77.18,187.93 76.31,172.67 79.41,157.65 107.8,90.5 114.98,64.64 116.07,37.85 108.74,0.2"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2801"
            points="115.27,262.93 98.47,278.6 86.18,298.03 78.81,319.78 77.31,342.72 82.93,376.76 106.03,454.01 116.31,494.98 125.55,544.02 132.73,597.3"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2802"
            points="88.44,271.65 61.69,286.74 40.28,295.2 21.45,298.66 2.5,296.34"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2803"
            points="0.01,154.56 10.1,121.53 13.83,91.1 11.64,64.34 0.26,3.99"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2804"
            points="154.8,274.33 167.65,282.59 182.44,286.55 197.74,286.12 212.41,281.66 225.58,273.84 236.7,263.28 247.78,247.64 254.17,233.69 257.68,218.77 257.41,199.63 254.13,184.63 241.31,144.4 237.72,117.82 239.63,94.89 250.59,38.37 251.71,19.21 250.65,0.05"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2805"
            points="179.56,272.52 190.44,268.86 202.41,259.38 210.4,246.35 213.6,231.4 212.75,219.93 210.08,208.73 204.34,194.5 187.08,160.22 182.55,145.56 181.08,134.15 182.98,111.24 195.83,63.02 199.42,44.17 200.63,25.02 198.75,2.08"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2806"
            points="104.34,291.55 103.08,310.63 106.57,329.49 139.58,415.49 154.2,467.19 164.12,523.91 171.61,596.47"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2807"
            points="140.3,277.71 147.36,291.27 157.42,302.86 207.91,344.17 221.72,357.49 230.83,369.84 238.8,387.26 245,413.38 249.48,455.37 253.9,597.37"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2808"
            points="68.08,297.93 46.15,324.61 28.12,354.06 16.93,382.62 11.97,409 11.27,435.85 14.24,466.41 40.35,598.23"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2809"
            points="52.56,337.49 48.18,363.94 50.43,398.37 56.32,428.51 80.07,525.48 93.08,597.26"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2810"
            points="177.71,304.31 195.34,311.86 214.07,315.85 229.31,314.6 243.5,308.87 255.2,298.99 266.95,283.82 285.48,254.66 295.66,234.02 300.5,215.49 300.59,196.34 297.8,181.24 285.65,136.81 283.11,113.94 284.7,90.98 294.59,34.26 294.92,3.58"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2811"
            points="212.79,331.85 237.55,342.3 252.34,346.34 263.67,344.95 269.85,340.55 275.13,330.38 288.15,286.22 310.02,245.69 317.35,227.97 320.24,212.92 319.44,193.78 304.88,138.09 302.08,115.25 303.39,92.27 313.29,35.55 313.51,1.05"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2812"
            points="268.53,356.06 272.98,362.22 275.19,369.57 278.35,400.1 280.65,599.75"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2813"
            points="0.66,590.36 2.08,597.91"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2814"
            points="307.6,361.95 309.43,354.57 312.89,312.47 315.81,297.41 323.82,280.02 346.6,244.48 352.3,230.25 354.33,218.92 352.51,196.04 337.08,144.56 333.04,118.04 334.71,91.26 344.94,34.6 344.66,0.1"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2815"
            points="314.9,375.36 316.75,444.45 317.49,598.04"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2816"
            points="322.69,352.49 329.61,349.22 337.22,349.17 344.12,352.46 350.05,357.33 361.31,372.77 371.12,397.75 378.99,431.38 385.6,476.98 390.54,530.51 394.67,599.5"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2817"
            points="329.18,335.86 341.39,321.11 356.94,309.89 374.49,302.21 389.52,299.19 404.83,299.72 419.34,304.57 431.93,313.3 444.82,327.49 455.39,343.5 467.71,367.38 479.49,395.74 490.75,428.41 511.61,506.29 529.34,596.71"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2818"
            points="329.9,314.29 343.5,295.77 385.06,255.98 391.38,246.37 394.79,235.42 394.82,223.94 392.47,212.67 370.27,155.42 366.14,140.63 363.85,125.45 364.92,98.65 376.87,38.42 377.69,19.25 376.2,0.12"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2819"
            points="334.15,361.98 338.77,372.51 342.72,387.34 348.59,429.15 352.75,494.29 355.76,597.93"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2820"
            points="348.95,331.74 356.53,330.58 367.95,331.75 378.59,336.06 388.13,342.52 396.66,350.24 406.24,362.22 420.95,389.14 434.15,425.18 445.64,469.79 456.67,530.22 465.59,598.76"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2821"
            points="370.94,287.39 405.74,271.25 420.39,266.68 431.79,265.14 435.58,265.64 442.07,269.58 452.92,285.35 466.82,312.75 482.05,347.99 507.52,420.42 530.53,505.67 549.96,599.67"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2822"
            points="598.2,276.74 569.76,257.18 555.89,250.59 541.26,245.96 518.47,242.81 468.62,244.7 453.5,242.51 440.57,234.39 422.97,214.13 408.21,191.68 395.68,167.91 388.93,149.95 385.13,131.16 385.9,104.36 399.67,40.61 400.36,21.44 398.61,2.33"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2823"
            points="538.57,258.32 519.65,261.21 509,265.55 502.62,269.81 495.26,278.59 490.75,289.16 489.5,296.72 490.19,312.04 493.97,330.86 520.82,423.02"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2824"
            points="599.97,300.08 588.61,298.29 577.11,298.7 566.03,301.72 556.15,307.57 550.69,312.95 544.63,322.71 541.06,333.64 539.2,348.87 540.16,371.87 545.47,406.01 586.25,597.54"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2825"
            points="598.98,248.68 597.03,237.34 596.91,225.83 599.88,206.9"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2826"
            points="573.93,244.8 564.95,232.35 559.6,222.15 554.5,199.79 556.74,180.8 577.36,127.06 581.21,112.2 583.22,96.98 583.35,81.63 581.32,62.55 568.9,2.39"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2827"
            points="551.76,234.77 524.77,213.2 511.2,199.63 500.38,183.84 495.75,169.26 495.39,157.77 497.46,146.45 518.05,96.85 523.43,74.49 524.19,59.16 522.89,43.87 513.79,2.64"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2828"
            points="523.43,228.99 483.76,214.54 460.75,200.74 452.03,193.23 441.89,181.71 433.69,168.74 429.02,158.22 424.7,139.56 425.15,120.42 428.36,105.41 440.98,65.1 444.58,42.38 444.13,23.21 440.49,0.47"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2829"
            points="598.43,333.57 585.59,341.83 574.74,357.55 569.78,372.04 567.58,394.94 569.17,421.75 573.46,452.17 599.38,587.95"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
          <polyline
            id="SvgjsPolyline2830"
            points="495.76,206.24 480.82,194.23 470.91,182.52 463.81,168.95 460.47,154.01 460.68,142.51 463.81,127.48 481.49,80.83 485.86,62.16 486.12,35.35 479.46,1.47"
            fill="none"
            stroke="#0d0d0d"
            stroke-width="1"
          />
        </g>
      </svg>

      <main className="z-10 ml-[30%]">
        <Button
          sx={{
            flex: 1,
            padding: ".5rem 1.5rem",
            fontSize: "1rem",
            fontWeight: 400,
            color: "#FFF",
            textTransform: "initial",
            borderRadius: 0,
          }}
          onClick={handleGoBack}
        >
          <ArrowBackIosIcon /> Go Back
        </Button>
        <h1 className="font-[900] text-8xl">VidCall</h1>
        <h1 className="ml-2 max-w-[500px] font-[700] text-3xl">
          Create a new video call.
        </h1>
        <div className="mt-5 flex w-[430px]">
          <Button
            sx={{
              flex: 1,
              padding: "1rem",
              fontSize: "1.2rem",
              fontWeight: 200,
              color: "#FFF",
              textTransform: "initial",
              borderRadius: 0,
            }}
          >
            <AddIcon className="mr-3" /> Start new call
          </Button>
          <Button
            sx={{
              flex: 1,
              padding: "1rem",
              fontSize: "1.2rem",
              fontWeight: 200,
              color: "#FFF",
              textTransform: "initial",
              borderRadius: 0,
            }}
          >
            <InsertLinkIcon className="mr-3" /> Create for later
          </Button>
        </div>
      </main>
    </div>
  );
}
