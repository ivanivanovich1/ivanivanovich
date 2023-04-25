import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Technologies } from "@/components/Technologies";
import { Desc } from "@/components/Desc";

const Home = () => {
  return (
    <>
      <Layout>
        <Header title={"ivanivanovich1"} desc={"Professional developer"} />
        <Technologies />
        <Desc title={"Why am I so cool?"} desc={"I am a professional. This is pretty obvsious, but let me explain. It has been a lot of years since I have started programming and I have learned a lot of stuff since these times. These times were bad, but I was and I AM a PROFESSIONAL."} />
      </Layout>
    </>
  )

}

export default Home;