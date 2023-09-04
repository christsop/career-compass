import Image from "next/image";

export function Index() {
  return (
    <div className="section">
      <h1>Welcome to Our Landing Page!</h1>
      <p>Explore our amazing career paths.</p>
      <Image
        src="/assets/businessman.svg"
        alt="Career Path"
        width={600}
        height={400}
      />
    </div>
  );
}

export default Index;
