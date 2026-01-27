export const selectColorBg = (
  color: string,
  theme: "light" | "dark",
  type: "active" | "no-active"
) => {
  switch (color) {
    case "green":
      if (theme === "light") return type === "active" ? "bg-green-400" : "bg-green-400/5";
      else return type === "active" ? "bg-green-400/75" : "bg-green-400/5";
    case "orange":
      if (theme === "light") return type === "active" ? "bg-orange-400" : "bg-orange-400/5";
      else return type === "active" ? "bg-orange-400/75" : "bg-orange-400/5";
    case "yellow":
      if (theme === "light") return type === "active" ? "bg-yellow-400" : "bg-yellow-400/5";
      else return type === "active" ? "bg-yellow-400/75" : "bg-yellow-400/5";
    case "blue":
      if (theme === "light") return type === "active" ? "bg-blue-500" : "bg-blue-500/10";
      else return type === "active" ? "bg-blue-500/75" : "bg-blue-500/10";
    case "purple":
      if (theme === "light") return type === "active" ? "bg-purple-400" : "bg-purple-400/5";
      else return type === "active" ? "bg-purple-400/75" : "bg-purple-400/5";
    case "gray":
      if (theme === "light") return type === "active" ? "bg-gray-400" : "bg-gray-400/5";
      else return type === "active" ? "bg-gray-500/75" : "bg-gray-500/5";
    case "red":
      if (theme === "light") return type === "active" ? "bg-primary" : "bg-primary/5";
      else return type === "active" ? "bg-primary/75" : "bg-primary/5";
    default:
      return "";
  }
};

export const selectTextColor = (color: string) => {
  switch (color) {
    case "green":
      return "#22c55e"; // green-400
    case "orange":
      return "#f97316"; // orange-400
    case "yellow":
      return "#eab308"; // yellow-400
    case "blue":
      return "#3b82f6"; // blue-500
    case "purple":
      return "#a855f7"; // purple-400
    case "gray":
      return "#9ca3af"; // gray-400
    case "red":
      return "#f87171"; // red-400
    default:
      return "#000000"; // cor padrão caso não encontre
  }
};
