import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { id: 1, linkTitle: "Pricing", link: "/pricing" },
  { id: 2, linkTitle: "Contact", link: "/contact" },
  { id: 3, linkTitle: "Book a call", link: "/book" },
];

interface DropDownNavProps {
  onClose: () => void;
}

const DropDownNav: React.FC<DropDownNavProps> = ({ onClose }) => {
  return (
    <motion.div
      className="bg-amber-400 w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-slate-900 p-6 space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl"
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}>
      <div className="flex-col flex space-y-10">
        {navLinks.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.link}
              onClick={onClose}
              className="text-slate-900 text-2xl">
              {item.linkTitle}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default DropDownNav;
