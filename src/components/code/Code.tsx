interface ColorProps {
  color?: "red" | "blue" | "green" | "red" | "yellow"; // Hacemos opcional el color
}

function Code({
  children,
  color = "primary" as ColorProps["color"],
}: {
  children: React.ReactNode;
  color?: ColorProps["color"];
}) {
  const colorClass = {
    rose: "text-red-600",
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
    primary: "text-primary", // Clase para el color por defecto
  };

  const selectedColor = color ? colorClass[color] : ""; // Ensure color is defined

  return (
    <code
      className={`dark:bg-stone-900 bg-stone-100 rounded-sm font-inconsolata select-all px-1 font-medium ${selectedColor}`}
    >
      {children}
    </code>
  );
}

export default Code;
