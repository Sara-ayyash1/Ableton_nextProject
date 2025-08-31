
import InfoSection from "@/components/InfoSection";
import Hero from "@/components/Hero";
import ImageCollage  from "@/components/ImageCollage ";

export default function About() {
return (

<div className="min-h-screen flex flex-col ">

{/* Hero Section */}
      <Hero
        title="Ableton"
        backgroundImage="/header.avif" />

   {/* Info Section */}
    <div>
      <InfoSection
        title={
          <>
            We make{" "}
            <a href="#" className="text-blue-600 hover:underline">Live</a>,{" "}
            <a href="#" className="text-blue-600 hover:underline">Push</a>,{" "}
            <a href="#" className="text-blue-600 hover:underline">Note</a>,{" "}
            <a href="#" className="text-blue-600 hover:underline">Move</a> and{" "}
            <a href="#" className="text-blue-600 hover:underline">Link</a> — 
            unique software and hardware for music creation and performance.
          </>
        }
        paragraphs={[
          "Ableton was founded in 1999 and released the first version of Live in 2001.Our products are used by a community of dedicated musicians, sound designers, and artists from across the world."
        ]}
      />

    
    </div>

    {/* Img Section */}

     
     <ImageCollage
      leftImages={[
        { src: "/photo-1.jpg", w: 400, h: 400 }
      ]}
      rightImage="/photo-2.jpg"
      bgPosition="right"
      bgColor="bg-yellow-100"
    />


      {/* Info Section */}
    <div>

       <InfoSection
        title="Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
        paragraphs={[
          "TWe feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
        ]}
      />
    </div>
    {/* video Section */}  




      {/* Info Section */}
    <div>

       <InfoSection
        title="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
"
         paragraphs={[
          "Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
        ]}
      />
     {/* Img Section */}

     <ImageCollage
      leftImages={[
        { src: "/photo-3.jpg", w: 200, h: 200 },
        { src: "/photo-4.jpg", w: 200, h: 200 }
      ]}
      rightImage="/photo-5.jpg"
      bgPosition="right"
      bgColor="bg-green-100"
    />

      {/* Info Section */}
    <div>

       <InfoSection
        title="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
        paragraphs={[
          "Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."  ]}
      />
    </div>
    </div>

     {/* video Section */}  


      {/* Img Section */}


      <ImageCollage
        leftImages={[{ src: "/photo-6-a.jpg", w: 300, h: 300 }]}
        rightImage="/photo-7.jpg"
        bgPosition="center"
        bgColor="bg-purple-300"
      />
     {/* Info Section */}
    <div>

       <InfoSection
        title="We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible."
        paragraphs={[
          "If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
        ]}
      />
    </div>

</div>
);
}