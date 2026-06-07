import {
  Code2,
  Globe,
  Palette,
  Megaphone,
  Share2,
  Search,
  PenTool,
  Video,
  ShoppingCart,
  Zap,
  Cloud,
  Headphones,
} from "lucide-react";
import type { IconName } from "./data";

export const iconMap: Record<IconName, typeof Code2> = {
  Code2,
  Globe,
  Palette,
  Megaphone,
  Share2,
  Search,
  PenTool,
  Video,
  ShoppingCart,
  Zap,
  Cloud,
  Headphones,
};

export function getIcon(name: IconName) {
  return iconMap[name];
}
