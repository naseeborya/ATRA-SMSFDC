export default function Footer() {
  return (
    <footer className=" bg-brand-primary text-white py-10">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Afghanistan Telecom Regulatory
          Authority
        </p>
      </div>
    </footer>
  );
}
