import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamMembers } from "@/components/TeamMembers";

const Team = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <div className="min-h-screen">
      <Header onCTAClick={handleCTAClick} />
      <div className="pt-20">
        <TeamMembers />
      </div>
      <Footer />
    </div>
  );
};

export default Team;
