export function Item({
  text,
  classes = "",
}: {
  text: string;
  classes?: string;
}) {
  return (
    <li className={`mt-1 flex ${classes}`}>
      <span className="mr-2 text-teal-400">▹</span>
      {text}
    </li>
  );
}
