import Container from '@/components/layout/Container';
import PageHeader from '@/components/ui/PageHeader';

export default function About() {
  return (
    <>
      <PageHeader title="About." />
      <Container className="py-16">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-8 md:col-start-3 prose-brutal">
            <h2>Born and raised in Northern Michigan</h2>
          </div>
          <div className="col-span-4 md:col-span-12 grid grid-cols-2 gap-6">
            <figure>
              <img
                src="/me/child1.jpg"
                alt="child1"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
            <figure>
              <img
                src="/me/child2.jpg"
                alt="child2"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
          </div>

          <div className="col-span-4 md:col-span-8 md:col-start-3 prose-brutal">
            <h2>Graduated From Michigan State</h2>
            <figure>
              <img
                src="/me/grad.jpeg"
                alt="grad"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
          </div>

          <div className="col-span-4 md:col-span-8 md:col-start-3 prose-brutal">
            <h2>World Traveler</h2>
          </div>
          <div className="col-span-4 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <figure>
              <img
                src="/me/travel1.jpeg"
                alt="travel1"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
            <figure>
              <img
                src="/me/travel2.jpeg"
                alt="travel2"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
            <figure>
              <img
                src="/me/travel3.jpg"
                alt="travel3"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
          </div>

          <div className="col-span-4 md:col-span-8 md:col-start-3 prose-brutal">
            <h2>Fashion Enjoyer and Vintage Collector</h2>
          </div>
          <div className="col-span-4 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <figure>
              <img
                src="/me/fit1.jpg"
                alt="fit1"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
            <figure>
              <img
                src="/me/fit2.jpeg"
                alt="fit2"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
            <figure>
              <img
                src="/me/fit3.jpg"
                alt="fit3"
                className="relative w-full aspect-[4/5] object-cover border-3 border-rule"
              />
            </figure>
          </div>
        </div>
      </Container>
    </>
  );
}
