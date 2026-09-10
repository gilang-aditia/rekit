import { ThreeDPaper } from "@/shaders/3d-paper/ThreeDPaper";
import "@/shaders/threeui.css";

export default function Home() {
  return (
    <div className="shader-frame">
      <ThreeDPaper variant="original" />
    </div>
  );
}
