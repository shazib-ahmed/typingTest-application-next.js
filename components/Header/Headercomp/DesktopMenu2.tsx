import Link from "next/link";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

export default function DesktopMenu2(props: { finishedLoading: boolean }) {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.4,
        }}
        className=" text-AAsecondary"
      >
        <Link href={"/"}>
          <span style={{ cursor: "pointer" }}>Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
