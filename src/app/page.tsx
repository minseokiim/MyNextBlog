import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Main from "@/components/Main";

export default function Home() {
  return (
    <section className="flex flex-col ">
      <Main />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  );
}
