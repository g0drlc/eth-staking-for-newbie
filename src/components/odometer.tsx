import dynamic from "next/dynamic";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => <div>0</div>,
});

export default Odometer;
