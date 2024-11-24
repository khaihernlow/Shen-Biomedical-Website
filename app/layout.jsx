import "@styles/globals.css";

import Nav from "@components/Nav";
import Header from "@components/Header";
import Statement from "@components/Statement";
import Research from "@components/Research";
import Recruitment from "@components/Recruitment";
import Calendar from "@components/Calendar";

export const metadata = {
  title: "Shen Biomedical Club",
  description: "Shen Biomedical Club is a student-run organization at Shenendehowa HS that aims to foster a community of students interested in the intersection of medicine and technology through research. See our meetings, published research, and projects.",
  icons: {
    icon: '/assets/favicon-light.png',
  }
};


const images = [
  { id: 1, src: "/assets/images/banner.jpg", alt: "Image 1" },
  { id: 2, src: "/assets/images/banner2.jpg", alt: "Image 2" },
  { id: 3, src: "/assets/images/banner3.jpg", alt: "Club Poster" },
];

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app font-worksans">
          <Nav />
          <Header images={images} />
          <Statement />
          <div className="bg-slate-100 lg:py-10 py-7">
            <Research />
          </div>
          <Calendar />
          <div className="bg-slate-100 lg:py-10 py-7">
            <Recruitment />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
};

export default layout;
