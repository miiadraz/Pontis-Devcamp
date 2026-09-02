type CardProps = {
  name: string;
  role: string;
};

export default function Card({ name, role }: CardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
    </article>
  );
}
