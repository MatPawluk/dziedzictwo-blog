import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-black dark:border-neutral-800">
      <Container>
        <div className="py-28 flex flex-col items-center">
          <h3 className="text-2xl font-bold tracking-tighter leading-tight text-center mb-6">
            Dziedzictwo
          </h3>
          <p className="text-center text-neutral-600 dark:text-neutral-400">
            Blog o współczesnej Wielkiej Brytanii © 2025 WeAreAllCharlie
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
